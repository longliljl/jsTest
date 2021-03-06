/**
 *
 * @author  long
 * @create  2017-10-19 15:27:45
 * @description 创建者模式
 */

var Car = function (param) {
    this.color = param && param.color || 'yellow';
    this.brand = param && param.brand || 'Tesla';
    this.power = param && param.power || 'electric';
}
//提供原型方法
Car.prototype={
    getColor : function () {
        return this.color;
    },
    getBrand : function () {
        return this.brand;
    },
    getPower : function () {
        return this.power;
    }
}

//创建一个反馈
var FeedBack = function(brand){
    var that = this;
    (function(brand,that){
        switch (brand){
            case 'Tesla':
                // that.brand = brand;
                that.information = '特斯拉是好车'
                break
            case 'Rolls' :
                that.information = '劳斯来时是好车'
        }
    })(brand,that)
}

FeedBack.prototype.changeBrand = function (information) {
    this.information = information;
}


//创建一个顾客
var Client = function(name,message){
    this.name = name;
    this.message = message || '无留言';
}
//顾客修改备注
Client.prototype.changeMessage = function(message){
    this.message = message;
}
//然后重点在这里！我们在这里将我们分解的拼接起来。
var Order = function(name){
    var object = new Car();
    object.client  = new Client(name);
    object.feedBack = new FeedBack(object.brand);
    return object;
}


var orderCar = new Order('Vendar-MH');
console.log('The' + orderCar.client.name + '先生、下单一辆' + orderCar.color + '的' + orderCar.brand +' 留言内容 : ' +orderCar.client.message );
orderCar.client.changeMessage('请马上电话联系我')
console.log('The' + orderCar.client.name + '先生、下单一辆' + orderCar.color + '的' + orderCar.brand +' 留言内容 : ' +orderCar.client.message );
console.log(typeof orderCar.feedBack);
console.log(orderCar.feedBack.information)