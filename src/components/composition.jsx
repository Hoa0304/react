// Button component
function Button(props) {
    return <button className="btn">{props.label}</button>;
}

// Page component
function Page() {
    return (
        <div className="page">
            <Header title="My App" />
            <Main>
                <Button label="Click me" />
                <Button label="Cancel" />
            </Main>
            <Footer copyright="2023" />
        </div>
    );
}

/*
Button component nhận prop label để hiển thị nội dung của nút.
Page component sử dụng composition để kết hợp các component con như Header, Main, Button, Footer.
Props được sử dụng để truyền dữ liệu từ Page xuống Button.
*/
