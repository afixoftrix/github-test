import React from 'react'
import * as Repo from './style'

const Repository =  ({ name, description, lang, stars, license }) => {
  return (
    <Repo.Container>
      <Repo.Title>{ name }</Repo.Title>
      <Repo.Description>{ description }</Repo.Description>
      <Repo.Accolades>
          <div>{ lang }</div>
          <div>{ stars }</div>
          <div>{ license }</div>
      </Repo.Accolades>
    </Repo.Container>
  )
}

Repository.defaultProps = {
    name: "hello-world",
    description: "simple repo that does hello-world in all languages",
    lang: 'go',
    stars: 13,
    license: "MIT"
}

export default Repository
