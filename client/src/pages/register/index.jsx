const Register = () => {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
            </head>
            <div className="container mt-5 w-50">
                <input placeholder="Full Name" className="form-control my-1" />
                <input placeholder="Mobile Number" className="form-control" />
                {/* <input placeholder="Address" className="form-control" /> */}
                <input placeholder="Password" type="password" className="form-control my-1" />
                <button className="form-control">Submit</button>
            </div>
        </>
    )
}
export default Register