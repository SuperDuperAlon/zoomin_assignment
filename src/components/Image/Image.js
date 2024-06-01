function Image({ movie, className }) {

    const srcUrl = require(`@/assets/${movie.title}.jpg`)

    return (
        <>
            <img src={srcUrl} alt={movie.title} className={className} />
        </>
    )
}

export default Image