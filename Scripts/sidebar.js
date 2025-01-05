export const sidebar = () => {
    // let sidebar = document.getElementsById("sidebar");
    let card = `
        <div class="side-bar-container">
            <h3>Brand</h3>
            <h4><i class="fa fa-plus" style="font-size:24px"></i></h4>
        </div>
        <div class="side-bar-container">
            <h3>Color</h3>
            <h4><i class="fa fa-plus" style="font-size:24px"></i></h4>
        </div>
        <div class="side-bar-container">
            <h3>Gender</h3>
            <h4><i class="fa fa-plus" style="font-size:24px"></i></h4>
        </div>
        <div class="side-bar-container">
            <h3>Product Type</h3>
            <h4><i class="fa fa-plus" style="font-size:24px"></i></h4>
        </div>
        <div class="side-bar-container">
            <h3>Sale</h3>
            <h4><i class="fa fa-plus" style="font-size:24px"></i></h4>
        </div>
        <div class="side-bar-container">
            <h3>Price</h3>
            <h4><i class="fa fa-plus" style="font-size:24px"></i></h4>
        </div>`;
    document.getElementById("sidebar").innerHTML = card;
}

sidebar();