import { BookaddProps } from "../../types/type";

export default function Bookadd({ select, setSelect, setTitle, setPrice, setContent, setId, handleSubmit }: BookaddProps) {
    return (
        <>
            <div className='store_box'>
                <h4 className='headline'>Add / Update Book</h4>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                        id="inlineRadio1" value="option1" onChange={(e) => setSelect(e.target.value)} checked={select === "option1"}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">Add Book</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                        id="inlineRadio2" value="option2" onChange={(e) => setSelect(e.target.value)} checked={select === "option2"}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">Update Book</label>
                </div>
                <form className="mt-2" onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text spanfix" id="basic-addon1">Title</span>
                        <input type="text" className="form-control" placeholder="book title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='row'>
                        <div className="input-group mb-3 col">
                            <span className="input-group-text spanfix" id="basic-addon1">Price</span>
                            <input type="number" className="form-control" placeholder="book price" onChange={(e) => setPrice(+e.target.value)} />
                        </div>

                        <div className="input-group mb-3 col">
                            <span className="input-group-text" id="basic-addon1">Id</span>
                            <input type="number" className="form-control" placeholder="book id" onChange={(e) => setId(+e.target.value)} disabled={select === "option1"} />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Content</span>
                        <textarea className="form-control" placeholder="book content" onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <div className="text-center">
                        <button type='submit' className="btn btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}