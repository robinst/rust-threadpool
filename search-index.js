var searchIndex = {};
searchIndex["threadpool"] = {"doc":"A thread pool used to execute functions in parallel.","items":[[3,"ThreadPool","threadpool","Abstraction of a thread pool for basic parallelism.",null,null],[11,"clone","","",0,null],[11,"new","","Spawns a new thread pool with `num_threads` threads.",0,{"inputs":[{"name":"usize"}],"output":{"name":"threadpool"}}],[11,"new_with_name","","Spawns a new thread pool with `num_threads` threads. Each thread will have the\n[name][thread name] `name`.",0,{"inputs":[{"name":"string"},{"name":"usize"}],"output":{"name":"threadpool"}}],[11,"execute","","Executes the function `job` on a thread in the pool.",0,null],[11,"active_count","","Returns the number of currently active threads.",0,null],[11,"max_count","","Returns the number of created threads",0,null],[11,"panic_count","","Returns the number of panicked threads over the lifetime of the pool.",0,null],[11,"set_threads","","**Deprecated: Use `ThreadPool::set_num_threads`**",0,null],[11,"set_num_threads","","Sets the number of worker-threads to use as `num_threads`.\nCan be used to change the threadpool size during runtime.\nWill not abort already running or waiting threads.",0,null],[11,"fmt","","",0,null]],"paths":[[3,"ThreadPool"]]};
initSearch(searchIndex);
