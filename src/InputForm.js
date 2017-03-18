import React from 'react'
import {render} from 'react-dom'

export class InputForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    const title = this.refs.title.value.trim()
    const text = this.refs.text.value.trim()

    // フォームのどちらかが空欄だったら処理しない
    if (!title || !text) {
      return
    }

    this.props.onTodoSubmit({title: title, text: text})

    // 送信後フォームの内容を空に
    this.refs.title.value = ''
    this.refs.text.value = ''
  }

  render() {
    return(
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="タスク名" ref="title" />
        <input type="text" placeholder="詳細" ref="text" />
        <button>追加</button>
      </form>
    )
  }
}
