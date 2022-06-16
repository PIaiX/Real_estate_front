import React from 'react';
import { Link } from 'react-router-dom';
import InputFile from '../../components/InputFile';

export default function ChatPage() {
    return (
        <div>
            <div className="chat-top px-2 px-md-4 px-xxl-5 mb-md-4 mb-xxl-5">
                <Link to="/personal-account/my-messages" className="d-flex align-items-center me-2">
                    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 11.6006 21)" stroke="#C59C7E" stroke-width="2"/>
                        <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 0.750669 0.709114 0.705094 11.6006 2)" stroke="#C59C7E" stroke-width="2"/>
                    </svg>
                    <span className="fs-09 ms-1 ms-md-3">Назад</span>
                </Link>
                <div className="d-flex align-items-center">
                    <div className="photo d-block d-lg-none me-1 me-sm-3">
                        <img src="/img/photo2.png" alt="Шевцов Андрей"/>
                        <div className="indicator online"></div>
                    </div>
                    <div className="text-lg-center">
                        <h4 className="text-lg-center color-1 mb-0">Шевцов Андрей</h4>
                        <div className="fs-09 fw-5">Тема: 1-к, квартира 52м2, ЖК “Столичный”</div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <span className="fw-3 fs-09 d-none d-xl-inline">Сейчас онлайн</span>
                    <div className="btn-group ms-sm-4">
                        <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg viewBox="0 0 6 27" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3"/>
                                <circle cx="3" cy="14" r="3"/>
                                <circle cx="3" cy="24" r="3"/>
                            </svg>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end py-2 fs-11">
                            <li><button className="dropdown-item" type="button">Удалить диалог</button></li>
                            <li><button className="dropdown-item" type="button">Заблокировать</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="messages-list">
                <div className="chat-date">14.01.22</div>
                <div className="message my">
                    <div className="photo">
                        <img src="/img/photo.png" alt="Колесникова Ирина"/>
                        <div className="indicator online"></div>
                    </div>
                    <div className="main">
                        <div className="name">Колесникова Ирина</div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor et diam, sed. Ligula luctus mus leo, justo, eu lectus iaculis ut. Sed convallis mauris sem neque pharetra. Donec iaculis turpis amet pulvinar scelerisque porta.</p>
                        </div>
                    </div>
                    <div className="mark">
                        {/* <i class="bi bi-check2" title="Отправлено"></i> */}
                        <i class="bi bi-check2-all" title="прочитано"></i>
                    </div>
                    <div className="date">19:30</div>
                    <div className="btns">
                        <button type="button">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                        <button type="button">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                </div>
                <div className="message">
                    <div className="photo">
                        <img src="/img/photo2.png" alt="Шевцов Андрей"/>
                        <div className="indicator"></div>
                    </div>
                    <div className="main">
                        <div className="name">Шевцов Андрей</div>
                        <div className="text">
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.s</p>
                        </div>
                    </div>
                    <div className="mark"></div>
                    <div className="date">19:30</div>
                    <div className="btns">
                        <button type="button">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </div>
                <div className="chat-date">Сегодня</div>
                <div className="message my">
                    <div className="photo">
                        <img src="/img/photo.png" alt="Колесникова Ирина"/>
                        <div className="indicator online"></div>
                    </div>
                    <div className="main">
                        <div className="name">Колесникова Ирина</div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor et diam, sed. Ligula luctus mus leo, justo, eu lectus iaculis ut. Sed convallis mauris sem neque pharetra. Donec iaculis turpis amet pulvinar scelerisque porta.</p>
                        </div>
                    </div>
                    <div className="mark">
                        <i class="bi bi-check2" title="Отправлено"></i>
                        {/* <i class="bi bi-check2-all" title="прочитано"></i> */}
                    </div>
                    <div className="date">19:30</div>
                    <div className="btns">
                        <button type="button">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                        <button type="button">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                </div>
                <div className="message unread">
                    <div className="photo">
                        <img src="/img/photo2.png" alt="Шевцов Андрей"/>
                        <div className="indicator"></div>
                    </div>
                    <div className="main">
                        <div className="name">Шевцов Андрей</div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="mark"></div>
                    <div className="date">19:30</div>
                    <div className="btns">
                        <button type="button">
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
            <form className="send-message p-2 p-sm-3 p-md-4 p-xl-5">
                <InputFile multiple={false}/>
                <textarea placeholder="Введите сообщение" rows="2" className="ms-2 ms-md-4"></textarea>
                <button type="submit" className="ms-2 ms-md-4">
                    <img src="/img/icons/send.svg" alt="отправить"/>
                </button>
            </form>
        </div>
    )
}
