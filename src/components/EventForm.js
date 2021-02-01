import React, { useState } from 'react';

import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    dispatch({ type: CREATE_EVENT, title, body });
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを削除してもよろしいですか？');
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  // ボタンの非活性管理
  const unCreatable = title === '' || body === '';
  const unAllDeletable = state.length === 0;

  return(
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
      </form>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">ボディ</label>
          <textarea
            className="form-control"
            id="formEventTitle"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={unAllDeletable}>全てのイベントを削除する</button>
      </form>
    </>
  );
};

export default EventForm;
