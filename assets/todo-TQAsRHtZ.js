import"./modulepreload-polyfill-B5Qt9EMX.js";const S=`<section class="todoapp">
    <header class="header">
        <h1>Productos</h1>
        <label for="new-todo-input" class="visually-hidden">Nueva tarea</label>
        <input id="new-todo-input" type="text" class="new-todo" placeholder="Agrega tu producto" autofocus>
    </header>

    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list"></ul>
    </section>

    <footer class="footer">
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>

        <ul class="filters">
            <li><a class="filtro selected" href="#/">Todos</a></li>
            <li><a class="filtro" href="#/active">Pendientes</a></li>
            <li><a class="filtro" href="#/completed">Completados</a></li>
        </ul>

        <button class="btn btn-primary clear-completed">Borrar completados</button>
    </footer>
</section>
`,i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function v(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}let w;const E=new Uint8Array(16);function A(){if(!w){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");w=crypto.getRandomValues.bind(crypto)}return w(E)}const y={};function C(e,t,n){let o;{const l=Date.now(),r=A();b(y,l,r),o=F(r,y.msecs,y.seq,t,n)}return t??v(o)}function b(e,t,n){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=n[6]<<23|n[7]<<16|n[8]<<8|n[9],e.msecs=t):(e.seq=e.seq+1|0,e.seq===0&&e.msecs++),e}function F(e,t,n,o,l=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!o)o=new Uint8Array(16),l=0;else if(l<0||l+16>o.length)throw new RangeError(`UUID byte range ${l}:${l+15} is out of buffer bounds`);return t??=Date.now(),n??=e[6]*127<<24|e[7]<<16|e[8]<<8|e[9],o[l++]=t/1099511627776&255,o[l++]=t/4294967296&255,o[l++]=t/16777216&255,o[l++]=t/65536&255,o[l++]=t/256&255,o[l++]=t&255,o[l++]=112|n>>>28&15,o[l++]=n>>>20&255,o[l++]=128|n>>>14&63,o[l++]=n>>>6&255,o[l++]=n<<2&255|e[10]&3,o[l++]=e[11],o[l++]=e[12],o[l++]=e[13],o[l++]=e[14],o[l++]=e[15],o}class x{constructor(t){this.id=C(),this.description=t,this.done=!1,this.createdAt=new Date}}const p={All:"all",Completed:"completed",Pending:"pending"},s={todos:[new x("Prueba")],filter:p.All},I=()=>{console.log("initStore")},k=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=p.All}=JSON.parse(localStorage.getItem("state"));s.todos=e.map(n=>{const o=new x(n.description);return o.id=n.id,o.done=n.done,o.createdAt=new Date(n.createdAt),o}),s.filter=t},g=()=>{localStorage.setItem("state",JSON.stringify(s))},$=(e=p.All)=>{const t={[p.All]:()=>[...s.todos],[p.Completed]:()=>s.todos.filter(n=>n.done),[p.Pending]:()=>s.todos.filter(n=>!n.done)};if(!t[e])throw new Error(`Option ${e} is not valid`);return t[e]()},P=e=>{if(!e)throw new Error("Description is required");s.todos.push(new x(e)),g()},q=e=>{s.todos=s.todos.map(t=>t.id===e?{...t,done:!t.done}:t),g()},D=e=>{s.todos=s.todos.filter(t=>t.id!==e),g()},H=()=>{s.todos=s.todos.filter(e=>!e.done),g()},M=(e=p.All)=>{s.filter=e,g()},R=()=>s.filter,d={Filters:p,state:s,initStore:I,loadStore:k,saveStateToLocalStorage:g,getTodos:$,addTodo:P,toggleTodo:q,deleteCompleted:H,deleteTodo:D,setFilter:M,getCurrentFilter:R},B=e=>{const{done:t,description:n,id:o}=e,l=`
        <div class="view">
            <input class="toggle" type="checkbox" id="todo-${o}" ${t?"checked":""}>
            <label for="todo-${o}">${n}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" id="edit-${o}" name="edit-${o}" value="${n}">
    `,r=document.createElement("li");return r.innerHTML=l,r.setAttribute("data-id",o),t&&r.classList.add("completed"),r},N=(e,t=[])=>{e.innerHTML="",t.forEach(n=>e.append(B(n)))},{Filters:U}=d,V=e=>{e.textContent=d.getTodos(U.Pending).length};localStorage.getItem("isLoggedIn")||(window.location.href="index.html");const m={borrarCompletado:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},O=e=>{const t=document.querySelector(e);if(!t)return console.error(`El elemento con id ${e} no existe`);t.innerHTML="";const n=document.createElement("div");n.innerHTML=S,t.append(n);const o=n.querySelector(m.NewTodoInput),l=n.querySelector(m.TodoList),r=n.querySelector(m.borrarCompletado),T=n.querySelectorAll(m.TodoFilters),L=n.querySelector(m.PendingCountLabel),u=()=>{const c=d.getTodos(d.getCurrentFilter());N(l,c),V(L)};u(),o.addEventListener("keydown",({key:c,target:a})=>{if(c!=="Enter")return;const h=a.value.trim();h&&(d.addTodo(h),u(),a.value="")}),l.addEventListener("click",({target:c})=>{if(c.classList.contains("toggle")){const a=c.closest("[data-id]");d.toggleTodo(a.getAttribute("data-id")),u()}else if(c.classList.contains("destroy")){const a=c.closest("[data-id]");d.deleteTodo(a.getAttribute("data-id")),u()}}),r.addEventListener("click",()=>{d.deleteCompleted(),u()}),T.forEach(c=>{c.addEventListener("click",a=>{switch(T.forEach(h=>h.classList.remove("selected")),a.target.classList.add("selected"),a.target.textContent){case"Todos":d.setFilter(d.Filters.All);break;case"Pendientes":d.setFilter(d.Filters.Pending);break;case"Completados":d.setFilter(d.Filters.Completed);break}u()})})},J=document.getElementById("logout-btn"),j=()=>{J.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href="index.html"})};j();d.loadStore();O("#app");
