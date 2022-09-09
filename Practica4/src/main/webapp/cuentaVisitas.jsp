<%-- 
    Document   : cuentaVisitas
    Created on : 8/09/2022, 09:30:34 PM
    Author     : roiar
--%>
<%@ page import = "java.util.Date" %> <%-- Importo la clase Date --%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id = "ctr" scope = "application" class = "paq.Counter" type = "paq.Counter"/>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ejemplo de manejo del scope de Beans</title>
        <link href="style.css" rel="stylesheet" type="text/css"> <%-- Incluyo css --%>
        <%
            Date fecha = new Date(); //instancio el objeto fecha
        %>
    </head>
    <body>
    <center>
        <header>Aprendiendo a usar jsp</header>
        <div id="scope-section">
        <h1>Ejemplo de scope de Bean</h1>
        <p>Eres el número de visitante:</p>
        
        <jsp:expression>ctr.getCount()</jsp:expression>
        
        <p>del día:</p>
        <p><%=fecha%></p> <%-- Utilizo el objeto instanciado --%>
        </div>
        <div id="lil-frog-section">
            <div class="lorem-section">
                <h1>Lorem ipsum dolor</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>
            </div>
            <div class="lorem-section">
                <img id="frog-image" src="https://images.pexels.com/photos/638689/pexels-photo-638689.jpeg" alt="little orange frog">
            </div>
        </div>
        <h1>Ejemplo utilizando for</h1>
        <p>le sumamos 1 a 5 hasta que el entero i sea mayor o igual a 3</p> <%-- Ocupo un for --%>
        <%
            int result = 5;
            for(int i=0; i<3; i++){
            result += 1;
            }
        %>
        <p>La suma de 5 con 3 es: <%=result%></p> <%-- Utilizando etiquetas html junto con codigo java se completan los requisitos de la práctica 4 --%>
    </center>
    </body>
</html>
