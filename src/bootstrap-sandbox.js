import $ from 'jquery';
// import 'bootstrap';

const template = `
    <div class="container">

      <div class="page-header">
        <h1>Bootstrap grid examples</h1>
        <p class="lead">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>
        <button type="button" id="myButton" class="btn btn-danger">
            Toggle Button
        </button>

      </div>

      <h3>Three equal columns</h3>
      <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>
      <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
      </div>
    </div>
`;

const div = document.createElement('div');
document.body.appendChild(div);
$('div').html(template);

$('#myButton').on('click', function () {
    $(this).button('toggle');
    // const $btn = $(this).button('loading');
    // business logic...
    // $(this).button('reset');
});
