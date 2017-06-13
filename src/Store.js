import router from './router/index'
import Vue from 'vue'
import axios from 'axios';


export const Store = {

	datas: {
		info: []
	},

	loadData() {
		axios.get('http://localhost:3000/').then((response) => {
			this.datas.info = response.data;
		});
	}

}