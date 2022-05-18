
import './style.css'


export default function Projects() {
  return (
    <div className="ContainterPage">
      <div className="ContentPage">
        <div className="TituloProject">
            <div className='Hola'>
          Projects
            </div>
          <div className="SubtitleProject">
            In my spare time I like to tinker on side projects. These are some
            of the results.
          </div>
        </div>
        <div className="View">
          <img style={{width:'50%', height:'100%'}} src="" alt="FotoProject" />
          <div style={{width:'50%'}}>
            <h1>Titulo</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              placeat similique labore soluta accusantium dolorem corporis
              veniam? Autem nam dolor quasi repudiandae quidem tempore suscipit
              similique, impedit illum, magni consequuntur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
