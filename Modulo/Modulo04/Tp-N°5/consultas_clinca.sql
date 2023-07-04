-- A)Agregar un nuevo paciente en la base de datos con los siguientes datos
SELECT * FROM clinica.paciente;
insert into paciente (nss,nombre,apellido,domicilio,codigo_postal,telefono,nro_historial_clinico,observaciones) values (22558,"Antonio","Magallanes","Dos Pindo 260", "3640", " "," 1932", '');

-- B)Actualizar el numero de teléfono de éste ultimo paciente agregado, asignando el dato: 3745-589174
SELECT * FROM clinica.paciente;
UPDATE paciente SET telefono = '3745-589174' where nss=22558;

-- C)Obtener un listado con una columna llamada “paciente” donde aparezca el apellido y nombre de cada
-- paciente separado por una coma luego del apellido, y una segunda columna llamada
-- “observacion_registrada” donde aparezca su correspondiente observación. En dicho listado solamente
-- deben aparecer los pacientes con alguna observación.

SELECT * FROM clinica.paciente;
select concat(apellido,",",nombre) as paciente, observaciones as observacion_resgistrada from paciente where observaciones in (observaciones);

-- D) Listar los pacientes (apellido y nombre separado por una coma en una sola columna) junto a la especialidad requerida en cada uno de los ingresos registrados en la base de datos.
SELECT * FROM clinica.paciente;
select concat(paciente.apellido,",",paciente.nombre) as paciente, medico.especialidad from paciente inner join ingreso 
on paciente.nro_historial_clinico = ingreso.nro_historial_paciente inner join medico
on medico.matricula = ingreso.nro_historial_clinico;

-- E)-- Eliminar de la base de datos aquellos médicos que no hay sido solicitados por ningún paciente
select * from medico where matricula not in (select matricula_medico from ingreso);
delete from medico where matricula not in (select matricula_medico from ingreso);

-- F)Listar los pacientes (apellido y nombre separado por una coma en una sola columna) junto a la especialidad requerida en cada uno de los ingresos registrados en la base de datos.
SELECT * FROM clinica.paciente;
select concat(paciente.apellido, ', ',  paciente.nombre) as ApeNom, medico.especialidad 
from paciente 
inner join ingreso on paciente.nro_historial_clinico = ingreso.nro_historial_paciente
inner join medico on medico.matricula = ingreso.matricula_medico;

-- G)Mostrar una lista ordenada con el apellido y nombre del paciente junto la cantidad de veces que ha realizado un ingreso, el listado solamente debe mostrar aquellos pacientes que hayan realizado al menos 4 (cuatro) ing

select paciente.apellido,paciente.nombre,ingreso.nro_historial_paciente,count(ingreso.nro_historial_paciente) 
from paciente inner join ingreso on paciente.nro_historial_clinico = ingreso.nro_historial_paciente 
group by ingreso.nro_historial_paciente 
having count(ingreso.nro_historial_paciente) >= 4 
order by count(ingreso.nro_historial_paciente) desc