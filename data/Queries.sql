SELECT r.name,
	i.name,
	s.`style`,
	rhi.cantidad,
	tdc.TipoDeCantidad,
	r.autor,
	r.Intrucciones 
FROM Recetas r
inner join Recetas_has_Ingredientes rhi 
on r.idRecetas = rhi.Recetas_idRecetas
inner join Ingredientes i 
on rhi.Ingredientes_idIngredientes = i.idIngredientes
inner join `style` s 
on i.style_idstyle = s.idstyle 
inner join TiposDeCantidad tdc 
on rhi.TiposDeCantidad_idTiposDeCantidad = tdc.idTiposDeCantidad 


SELECT * 
FROM usuarios_has_Recetas uhr 
inner join usuarios u 
on u.idusuarios = uhr.usuarios_idusuarios 
inner join Recetas r 
on r.idRecetas = uhr.Recetas_idRecetas 

