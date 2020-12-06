function hello() {
  console.log("helsssslo");
}

function bye() {
  console.log("byebye");
}

function fn(cb) {
  cb();
}

fn(hello);
fn(bye);