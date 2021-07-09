const Article =({title,date= "January 1, 1970",preview})=>{return(
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )}
  const ArticleList = ({posts})=>{
    return(
      <main>
          {posts.map(({title,date,preview,id})=><Article key={id}title={title} date={date} preview={preview}/>)}
      </main>
    )
  }
export default ArticleList