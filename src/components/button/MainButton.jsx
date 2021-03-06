import { ButtonMain, ButtonSub } from "./buttonElements";
// import Image from 'next/image';

export default function MainButton(props) {
    return (
        <>
        {props.main ?(
            <ButtonMain onClick={props.click}>
                <h2 className="">
                    { props.text }
                </h2>
                <img  src='/img/arr.svg' alt='' width={30} height={20}/>
            </ButtonMain>
        ):(
            <ButtonSub onClick={props.click}>
                <h3>{ props.text}</h3>
                <img src='/img/red.svg' alt='' width={30} height={20}/>
            </ButtonSub>
        )}

        </>
    );
}