create table medico(
matricula INT(11) NOT NULL primary key,
nombre varchar(30),
apellido varchar(30),
especialidad varchar(20),
observaciones text
);

create table paciente(
nss bigint(20) not null,
nombre varchar(30)not null,
apellido varchar(30)not null,
domicilio varchar(50),
codigo_postal smallint(6),
telefono varchar(16),
nro_historial_clinico int(11)not null primary key,
observaciones text
);

create table Ingreso(
id_ingreso int(11)not null primary key,
fecha_ingreso date not null,
nro_habitacion smallint(6),
nro_cama smallint(6),
observaciones text,
nro_historial_paciente int(11) not null,
matricula_medico int(11) not null,
FOREIGN KEY (nro_historial_paciente) REFERENCES paciente(nro_historial_clinico),
FOREIGN KEY (matricula_medico) REFERENCES medico(matricula)
);