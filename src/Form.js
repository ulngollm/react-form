import Button from './Button';

export default function Form(props){
    function onSubmit(e){
        e.preventDefault();
        console.log(e.target.name);
    }
    return (
        <form action="" name={props.name} onSubmit={onSubmit}>
            <input type="text" placeholder="name" required/>
            <Button></Button>
        </form>
    );
}