CREATE TABLE Alumnos (
DNI int(9) NOT NULL UNIQUE,
Cod_Matricula varchar(45) NOT NULL UNIQUE,
Nombre varchar(40) NOT NULL,
Fecha_Nac varchar(40) NOT NULL,
Email varchar(40),
PRIMARY KEY (DNI)
);

CREATE TABLE Profesores (
   Profesor_id varchar(40) not null ,
   Nombre varchar(40),
   Especialidad varchar(40),
   Email varchar(40),
   primary key(Profesor_id)
);

CREATE TABLE Cursos (
   Cod_Curso varchar(40) not null unique,
   Nombre varchar(40) not null,
   primary key(Cod_Curso),
   Profesores_id varchar(40),
   foreign key (Profesores_id) REFERENCES Profesores (Profesor_id)
);

CREATE TABLE Alumno_Cursos (
alumno_id int,
cursos_id varchar(45),
foreign key (alumno_id) REFERENCES Alumnos (DNI),
foreign key (cursos_id) REFERENCES Cursos (Cod_Curso)
);