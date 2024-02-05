import Button from "./Button";

const Section = () => {
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quam iusto? Sunt facere, necessitatibus ex similique veniam voluptas! Dolorem accusamus reiciendis corporis nobis perferendis odio ducimus excepturi fugiat beatae sit.</p>
            <Button text="Press!" color="blue" radius="no-radius" />
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus provident et deleniti atque deserunt nobis quam beatae consectetur, quia qui recusandae praesentium maxime, incidunt iusto dolorum modi quod! Vel!</p>
            <Button text="Don't press here" color="orange" />
            <Button text="Hello"  />
            <Button text="This is blue" color="blue" />
            <Button text="This one is orange" color="orange" />
        </>
    )
}

export default Section;