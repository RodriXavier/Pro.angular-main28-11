import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudProdComponent } from './crud-prod/crud-prod.component';
import { Producto } from '../Interfaces/Producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'descripcion', 'codigo', 'stock', 'marca','precio'];
  loading: boolean = false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<Producto>;

  constructor(public dialog: MatDialog, private _ProdService: ProductoService,
    private _snackBar: MatSnackBar) {
     this.dataSource  = new MatTableDataSource();
    }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}

obtenerProductos() {

  this._ProdService.getProductos().subscribe(data => {   
     this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
  
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

agregarEditarProd(id?: number) {
  const dialogRef = this.dialog.open(CrudProdComponent, {
    width: '550px', 
    disableClose: true,
    data: { id: id }  
  }); 

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      this.obtenerProductos();
    }
  });
 }


deleteProducto(id: number) {
  this.loading = true;

  setTimeout(() => {
    this._ProdService.deleteProducto(id).subscribe(() => {
      this.obtenerProductos();
      this.mensajeExito();
    })
  }, 1000);
}

mensajeExito() {
  this._snackBar.open('El producto fue eliminado con exito', '', {
    duration: 2000
  });
}

};
