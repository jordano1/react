var template = (
<div>
    <h1>Jordan</h1> 
    <p>INFORMATION HERE</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

var templateTwo = (
    <div>
        <h1>Jordan</h1> 
        <p>Age 31</p>
        <p>Utah</p>
    </div>
    );

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
