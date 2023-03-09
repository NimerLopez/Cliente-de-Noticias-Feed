
function New(props) {
    console.log(props.new);
    return (
        <>
            {props.new.map((news, index) => (
                <div key={index} className="flex-new">
                    <h3 className="time">{news.date}</h3>
                    <img src="https://cdn.sancarlosdigital.com/wp-content/uploads/2023/03/maquina-trituradora-696x464.jpg.webp" alt=""></img>
                    <h2 href="">{news.title}</h2>
                    <p className="category">Deportes</p>
                    <p>{news.short_description}</p>
                    <a href={news.permalink}>Ver Noticia</a>
                </div>
            ))}
        </>
    )
}
export default New;