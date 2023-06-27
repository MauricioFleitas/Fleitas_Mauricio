CREATE TABLE Paises (
Pais_id varchar(40) NOT NULL UNIQUE PRIMARY KEY,
Nombre_Pais varchar(40) NOT NULL UNIQUE
);

CREATE TABLE Provincias (
Provincia_id varchar(40) NOT NULL UNIQUE PRIMARY KEY,
Nombre_Provincia varchar(40) NOT NULL,
pais_id varchar(40) NOT NULL,
FOREIGN KEY (pais_id) REFERENCES Paises(Pais_id)
);

CREATE TABLE Localidades (
Codigo_Loc varchar(40) NOT NULL UNIQUE PRIMARY KEY,
Nombre varchar(40) NOT NULL,
Codogo_Pos varchar(40)NOT NULL UNIQUE,
provincia_id varchar(40)NOT NULL,
FOREIGN KEY (provincia_id) REFERENCES Provincias(Provincia_id)
);

CREATE TABLE Empleados (
DNI varchar(40) NOT NULL UNIQUE PRIMARY KEY,
Empleado_id varchar(40) NOT NULL UNIQUE,
Nombre varchar(40) NOT NULL,
Telefono varchar(40) NOT NULL,
Email varchar(40) NOT NULL,
Fecha_alta varchar(40) NOT NULL,
codigo_loc varchar(40)NOT NULL,
FOREIGN KEY (codigo_loc) REFERENCES Localidades(Codigo_Loc)
);