const vue = new Vue({
    el: '#library',
    data: {
        books: [{
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
        }, {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
        }, {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
        }, {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
        }, ],
    },
    methods: {
        //点击按键 数值加一
        increment(index) {
            this.books[index].count++;
        },
        //点击按键 数值减一
        delcrement(index) {
            this.books[index].count--;
        },
        //点击按键 删除该行
        delClass(index) {
            this.books.splice(index, 1);
        }
    },
    computed: { //计算函数
        totalPrice() {
            // let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count; 
            // }
            // return totalPrice;
            return this.books.reduce(function(preValue, book) {
                return preValue + book.price * book.count
            }, 0);


        }
    },
    filters: { //筛选器
        showPrice(price) {
            return '￥' + price.toFixed(2) + '元'; //数字保留两位小数
        }
    }
})