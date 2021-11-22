import "./MiPrimerComponente.css";

const MiPrimerComponente = () => {
  return (
    <>
      <h2>Mi primer componente</h2>
      <h3>Subtitulo desde mi primer componente</h3>
      <p>Parrafo desde mi primer componente</p>

      {/********************* formulario *************************/}
      <h4>Fomrmulario de registro</h4>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" palaceholder="Nombre" name="nombre" id="nombre" />
        <br />
        <label htmlFor="apellido">Apelldio</label>
        <input
          type="text"
          palaceholder="Apellido"
          name="apellido"
          id="apellido"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" palaceholder="Email" name="email" id="email" />
        <br />
        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          palaceholder="Telefono"
          name="telefono"
          id="telefono"
        />
        <br />
        <button type="Submit">Enviar</button>
      </form>
    </>
  );
};

export default MiPrimerComponente;
