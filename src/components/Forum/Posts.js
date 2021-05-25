import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/api/v1`
})
class Posts extends React.Component {
    state = {posts: []}
    pageNumber = 0;
    sizeNumber = 20;

    constructor() {
        super();
        this.getPosts()
    }

    getPosts = async () => {
        try {
            let data = await api.get('/posts',{
                // headers: {
                //     Authorization: 'Bearer ' + localStorage.getItem('token')
                // },
                params: {
                    page: this.pageNumber,
                    size: this.sizeNumber
                }}).then(({data}) => data);
            this.setState({posts: data})
        } catch (err) {

            console.log(err)
        }
    }

    postPosts = async () => {
        try {
            let data = await api.post('/posts',).then(({data}) => data);
            this.setState({posts: data})
        } catch (err) {

            console.log(err)
        }
    }

    render() {
        return (
        <div className="container">
            <div className="main-body p-0 my-2">
                <div className="inner-wrapper">
                    <div className="inner-sidebar mr-2">
                        <div className="inner-sidebar-header justify-content-center">
                            <button className="btn btn-primary has-icon btn-block" type="button" data-toggle="modal"
                                    data-target="#threadModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-plus mr-2">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                                NEW DISCUSSION
                            </button>
                        </div>
                    </div>

                    <div className="inner-main">
                        <div className="inner-main-header">
                            <span className="input-icon input-icon-sm ml-auto w-auto">
                                <input type="text"
                                       className="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-4 mt-4"
                                       placeholder="Search forum"/>
                            </span>
                        </div>
                        {this.state.posts.map(post =>
                        <div className="inner-main-body p-2 p-sm-3 collapse forum-content show" key={post.postId}>
                            <div className="card mb-2">
                                <div className="card-body p-2 p-sm-3">
                                    <div className="media forum-item">
                                        <a href="#" data-toggle="collapse" data-target=".forum-content"><img
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            className="mr-3 rounded-circle" width="50" alt="User"/></a>
                                        <div className="media-body">
                                            <a href="javascript:void(0)" className="text-secondary">{post.authorFirstName + ' ' + post.authorLastName}</a>
                                            <h6>
                                                <a href="#" data-toggle="collapse" data-target=".forum-content" className="text-body">{post.title}</a>
                                            </h6>
                                            <p className="text-secondary">{post.content}</p>
                                            <p className="text-muted"><a href="javascript:void(0)">Jarek Zeszytowski</a> replied</p>
                                        </div>
                                        <div className="text-muted small text-center align-self-center">
                                        <span className="d-none d-sm-inline-block"><i className="far fa-eye"/>{post.createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}

                        {this.state.posts.map(post =>
                        <div className="inner-main-body p-2 p-sm-3 collapse forum-content" key={post.postId}>
                            <a href="#" className="btn btn-light btn-sm mb-3 has-icon" data-toggle="collapse"
                               data-target=".forum-content"><i className="fa fa-arrow-left mr-2"/>Back</a>
                            <div className="card mb-2">
                                <div className="card-body">
                                    <div className="media forum-item">
                                        <a href="javascript:void(0)" className="card-link">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                 className="rounded-circle" width="50" alt="User"/>
                                        </a>
                                        <div className="media-body ml-3">
                                            <a href="javascript:void(0)" className="text-secondary">Jarek Zeszytowski</a>
                                            <small className="text-muted ml-2">1 hour ago</small>
                                            <div className="mt-3 font-size-sm">
                                                <p>Dzień dobry!</p>
                                            </div>
                                            <button className="btn btn-xs text-muted has-icon"><i className="fa fa-heart" aria-hidden="true"/>1
                                            </button>
                                            <a href="javascript:void(0)" className="text-muted small">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}

                    </div>
                </div>

                <div className="modal fade" id="threadModal" tabIndex="-1" role="dialog"
                     aria-labelledby="threadModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header d-flex align-items-center bg-primary text-white">
                                    <h6 className="modal-title mb-0" id="threadModalLabel">New Discussion</h6>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="threadTitle">Title</label>
                                        <input type="text" className="form-control" id="threadTitle"
                                               placeholder="Enter title"
                                               autoFocus=""/>
                                    </div>
                                    <textarea className="form-control summernote" style={{display: "none"}}/>

                                    <div className="form-group">
                                        <label htmlFor="message" className="col-m-2 control-label">Message</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" rows="4" name="message"/>
                                        </div>
                                    </div>

                                    <div className="custom-file form-control-sm mt-3" style={{maxWidth: "300px"}}>
                                        <input type="file" className="custom-file-input" id="customFile" multiple=""/>
                                        <label className="custom-file-label" htmlFor="customFile">Attachment</label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Posts;