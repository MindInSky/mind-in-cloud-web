const Wrapper = ({ condition, wrapper, children, alternate = false }) => {

    if ( condition ) {

        return wrapper( children )

    } else if ( alternate ) {

        return alternate( children )

    } else {

        return children

    }
}

export default Wrapper
