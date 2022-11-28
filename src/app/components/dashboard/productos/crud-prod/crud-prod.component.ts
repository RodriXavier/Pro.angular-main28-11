import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marca } from '../../Interfaces/Marcas';
import { Producto } from '../../Interfaces/Producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-crud-prod',
  templateUrl: './crud-prod.component.html',
  styleUrls: ['./crud-prod.component.css']
})

export class CrudProdComponent implements OnInit {
  id: number | undefined;
  form: FormGroup;
  operacion: string = 'Agregar ';
  @Input() marcas : Marca[] = []

  constructor(public dialogRef: MatDialogRef<CrudProdComponent>,
    private fb: FormBuilder, 
    private _productoService:ProductoService,
    private _snackBar: MatSnackBar,
    ) {
      this.form = this.fb.group({
        id: [null],
        descripcion:[''],
        codigo: [null],
        stock: [null],
        marcas: [''],
        precio:[null]
      })
    }

  ngOnInit(): void {
    this.id
  }
  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.operacion = 'Editar ';
      this.getProd(id);
    }
  }
  getProd(id: number) {
    this._productoService.getProducto(id).subscribe(data => {
      this.form.setValue({
        id: data.id,
        descripcion: data.descripcion,
        codigo: data.codigo,
        stock: data.stock,
        marca: data.marca,
        precio: data.precio
      })
    })
  }
  cancelar() {
    this.dialogRef.close(false);
  }
  agregarEditarProd() {

    const producto: Producto = {
      id: this.form.value.id,
      descripcion: this.form.value.apellido,
      codigo: this.form.value.codigo,
      stock: this.form.value.stock,
      marca: this.form.value.marca,
      precio: this.form.value.precio
    }

    if (this.id == undefined) {

      // Es agregar
      this._productoService.addProducto(producto).subscribe(() => {
        this.mensajeExito('Producto agregado');
      })

    } else {

      // Es editar
      this._productoService.updateProducto(this.id, producto).subscribe(data => {
        this.mensajeExito('actualizada');
      })
    }
  }

  mensajeExito(operacion: string) {
    this._snackBar.open(`La persona fue ${operacion} con exito`, '', {
      duration: 2000
    });
  }
}
