/** @constructor */
ScalaJS.c.scala_collection_mutable_OpenHashMap = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.actualInitialSize$5 = 0;
  this.scala$collection$mutable$OpenHashMap$$mask$5 = 0;
  this.scala$collection$mutable$OpenHashMap$$table$5 = null;
  this.$$undsize$5 = 0;
  this.scala$collection$mutable$OpenHashMap$$deleted$5 = 0;
  this.scala$collection$mutable$OpenHashMap$$modCount$f = 0
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.constructor = ScalaJS.c.scala_collection_mutable_OpenHashMap;
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.empty__Lscala_collection_mutable_OpenHashMap = (function() {
  return ScalaJS.modules.scala_collection_mutable_OpenHashMap().empty__Lscala_collection_mutable_OpenHashMap()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$mask__I = (function() {
  return this.scala$collection$mutable$OpenHashMap$$mask$5
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$mask$und$eq__p5__I__V = (function(x$1) {
  this.scala$collection$mutable$OpenHashMap$$mask$5 = x$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry = (function() {
  return this.scala$collection$mutable$OpenHashMap$$table$5
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$table$und$eq__p5__ALscala_collection_mutable_OpenHashMap$OpenEntry__V = (function(x$1) {
  this.scala$collection$mutable$OpenHashMap$$table$5 = x$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$undsize__p5__I = (function() {
  return this.$$undsize$5
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$undsize$und$eq__p5__I__V = (function(x$1) {
  this.$$undsize$5 = x$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$deleted__I = (function() {
  return this.scala$collection$mutable$OpenHashMap$$deleted$5
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$deleted$und$eq__I__V = (function(x$1) {
  this.scala$collection$mutable$OpenHashMap$$deleted$5 = x$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.size__I = (function() {
  return this.$$undsize__p5__I()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$size$und$eq__I__V = (function(s) {
  this.$$undsize$und$eq__p5__I__V(s)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.hashOf__O__I = (function(key) {
  var h = ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(key);
  h = (h ^ ((h >>> 20) ^ (h >>> 12)));
  return ((h ^ (h >>> 7)) ^ (h >>> 4))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.growTable__p5__V = (function() {
  var oldSize = (this.scala$collection$mutable$OpenHashMap$$mask__I() + 1);
  var newSize = (4 * oldSize);
  var oldTable = this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry();
  this.scala$collection$mutable$OpenHashMap$$table$und$eq__p5__ALscala_collection_mutable_OpenHashMap$OpenEntry__V(ScalaJS.newArrayObject(ScalaJS.data.scala_collection_mutable_OpenHashMap$OpenEntry.getArrayOf(), [newSize]));
  this.scala$collection$mutable$OpenHashMap$$mask$und$eq__p5__I__V((newSize - 1));
  ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(oldTable, 1)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(entry) {
      if (((!ScalaJS.anyRefEqEq(entry, null)) && (!ScalaJS.anyRefEqEq(entry.value__Lscala_Option(), ScalaJS.modules.scala_None())))) {
        arg$outer.scala$collection$mutable$OpenHashMap$$addEntry__Lscala_collection_mutable_OpenHashMap$OpenEntry__V(entry)
      };
      return ScalaJS.bV(undefined)
    })
  })(this)));
  this.scala$collection$mutable$OpenHashMap$$deleted$und$eq__I__V(0)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.findIndex__p5__O__I = (function(key) {
  return this.findIndex__p5__O__I__I(key, this.hashOf__O__I(key))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.findIndex__p5__O__I__I = (function(key, hash) {
  var j = hash;
  var index = (hash & this.scala$collection$mutable$OpenHashMap$$mask__I());
  var perturb = index;
  while (((!ScalaJS.anyRefEqEq(this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index], null)) && (!((this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index].hash__I() === hash) && ScalaJS.anyEqEq(this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index].key__O(), key))))) {
    j = (((5 * j) + 1) + perturb);
    perturb = (perturb >> 5);
    index = (j & this.scala$collection$mutable$OpenHashMap$$mask__I())
  };
  return index
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$addEntry__Lscala_collection_mutable_OpenHashMap$OpenEntry__V = (function(entry) {
  if ((!ScalaJS.anyRefEqEq(entry, null))) {
    this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[this.findIndex__p5__O__I__I(entry.key__O(), entry.hash__I())] = entry
  }
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.update__O__O__V = (function(key, value) {
  this.scala$collection$mutable$OpenHashMap$$put__O__I__O__Lscala_Option(key, this.hashOf__O__I(key), value)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_OpenHashMap = (function(kv) {
  this.put__O__O__Lscala_Option(kv.$$und1__O(), kv.$$und2__O());
  return this
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$minus$eq__O__Lscala_collection_mutable_OpenHashMap = (function(key) {
  this.remove__O__Lscala_Option(key);
  return this
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.put__O__O__Lscala_Option = (function(key, value) {
  return this.scala$collection$mutable$OpenHashMap$$put__O__I__O__Lscala_Option(key, this.hashOf__O__I(key), value)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$put__O__I__O__Lscala_Option = (function(key, hash, value) {
  if (((2 * (this.size__I() + this.scala$collection$mutable$OpenHashMap$$deleted__I())) > this.scala$collection$mutable$OpenHashMap$$mask__I())) {
    this.growTable__p5__V()
  };
  var index = this.findIndex__p5__O__I__I(key, hash);
  var entry = this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index];
  if (ScalaJS.anyRefEqEq(entry, null)) {
    this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index] = new ScalaJS.c.scala_collection_mutable_OpenHashMap$OpenEntry().init___O__I__Lscala_Option(key, hash, new ScalaJS.c.scala_Some().init___O(value));
    this.scala$collection$mutable$OpenHashMap$$modCount$f = (this.scala$collection$mutable$OpenHashMap$$modCount$f + 1);
    this.scala$collection$mutable$OpenHashMap$$size$und$eq__I__V((this.size__I() + 1));
    return ScalaJS.modules.scala_None()
  } else {
    var res = entry.value__Lscala_Option();
    if (ScalaJS.anyRefEqEq(entry.value__Lscala_Option(), ScalaJS.modules.scala_None())) {
      this.scala$collection$mutable$OpenHashMap$$size$und$eq__I__V((this.size__I() + 1));
      this.scala$collection$mutable$OpenHashMap$$modCount$f = (this.scala$collection$mutable$OpenHashMap$$modCount$f + 1)
    };
    entry.value$und$eq__Lscala_Option__V(new ScalaJS.c.scala_Some().init___O(value));
    return res
  }
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.remove__O__Lscala_Option = (function(key) {
  var index = this.findIndex__p5__O__I(key);
  if (((!ScalaJS.anyRefEqEq(this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index], null)) && (!ScalaJS.anyRefEqEq(this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index].value__Lscala_Option(), ScalaJS.modules.scala_None())))) {
    var res = this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index].value__Lscala_Option();
    this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index].value$und$eq__Lscala_Option__V(ScalaJS.modules.scala_None());
    this.scala$collection$mutable$OpenHashMap$$size$und$eq__I__V((this.size__I() - 1));
    this.scala$collection$mutable$OpenHashMap$$deleted$und$eq__I__V((this.scala$collection$mutable$OpenHashMap$$deleted__I() + 1));
    return res
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.get__O__Lscala_Option = (function(key) {
  var hash = this.hashOf__O__I(key);
  var j = hash;
  var index = (hash & this.scala$collection$mutable$OpenHashMap$$mask__I());
  var perturb = index;
  var entry = this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index];
  while ((!ScalaJS.anyRefEqEq(entry, null))) {
    if (((entry.hash__I() === hash) && ScalaJS.anyEqEq(entry.key__O(), key))) {
      return entry.value__Lscala_Option()
    };
    j = (((5 * j) + 1) + perturb);
    perturb = (perturb >> 5);
    index = (j & this.scala$collection$mutable$OpenHashMap$$mask__I());
    entry = this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[index]
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1().init___Lscala_collection_mutable_OpenHashMap(this)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.clone__Lscala_collection_mutable_OpenHashMap = (function() {
  var it = new ScalaJS.c.scala_collection_mutable_OpenHashMap().init___();
  this.foreachUndeletedEntry__p5__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(it$1) {
    return (function(entry) {
      it$1.scala$collection$mutable$OpenHashMap$$put__O__I__O__Lscala_Option(entry.key__O(), entry.hash__I(), entry.value__Lscala_Option().get__O());
      return ScalaJS.bV(undefined)
    })
  })(it)));
  return it
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.foreach__Lscala_Function1__V = (function(f) {
  var startModCount = this.scala$collection$mutable$OpenHashMap$$modCount$f;
  this.foreachUndeletedEntry__p5__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$2, startModCount$1) {
    return (function(entry) {
      if ((arg$outer.scala$collection$mutable$OpenHashMap$$modCount$f !== startModCount$1)) {
        ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Concurrent Modification")
      };
      f$2.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(entry.key__O(), entry.value__Lscala_Option().get__O()));
      return ScalaJS.bV(undefined)
    })
  })(this, f, startModCount)))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.foreachUndeletedEntry__p5__Lscala_Function1__V = (function(f) {
  ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry(), 1)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(f$1) {
    return (function(entry) {
      if (((!ScalaJS.anyRefEqEq(entry, null)) && (!ScalaJS.anyRefEqEq(entry.value__Lscala_Option(), ScalaJS.modules.scala_None())))) {
        f$1.apply__O__O(entry)
      };
      return ScalaJS.bV(undefined)
    })
  })(f)))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.transform__Lscala_Function2__Lscala_collection_mutable_OpenHashMap = (function(f) {
  this.foreachUndeletedEntry__p5__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(f$3) {
    return (function(entry) {
      entry.value$und$eq__Lscala_Option__V(new ScalaJS.c.scala_Some().init___O(f$3.apply__O__O__O(entry.key__O(), entry.value__Lscala_Option().get__O())));
      return ScalaJS.bV(undefined)
    })
  })(f)));
  return this
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.retain__Lscala_Function2__Lscala_collection_mutable_OpenHashMap = (function(f) {
  this.foreachUndeletedEntry__p5__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$4) {
    return (function(entry) {
      if ((!ScalaJS.uZ(f$4.apply__O__O__O(entry.key__O(), entry.value__Lscala_Option().get__O())))) {
        entry.value$und$eq__Lscala_Option__V(ScalaJS.modules.scala_None());
        arg$outer.scala$collection$mutable$OpenHashMap$$size$und$eq__I__V((arg$outer.size__I() - 1));
        arg$outer.scala$collection$mutable$OpenHashMap$$deleted$und$eq__I__V((arg$outer.scala$collection$mutable$OpenHashMap$$deleted__I() + 1))
      };
      return ScalaJS.bV(undefined)
    })
  })(this, f)));
  return this
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.stringPrefix__T = (function() {
  return "OpenHashMap"
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Map(elem)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.retain__Lscala_Function2__Lscala_collection_mutable_MapLike = (function(p) {
  return this.retain__Lscala_Function2__Lscala_collection_mutable_OpenHashMap(p)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.transform__Lscala_Function2__Lscala_collection_mutable_MapLike = (function(f) {
  return this.transform__Lscala_Function2__Lscala_collection_mutable_OpenHashMap(f)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_OpenHashMap()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.clone__Lscala_collection_mutable_Map = (function() {
  return this.clone__Lscala_collection_mutable_OpenHashMap()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_OpenHashMap(elem)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__O__Lscala_collection_mutable_OpenHashMap(key)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_OpenHashMap(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_OpenHashMap(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_OpenHashMap(kv)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_OpenHashMap()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return this.empty__Lscala_collection_mutable_OpenHashMap()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.init___I = (function(initialSize) {
  ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___.call(this);
  this.actualInitialSize$5 = ScalaJS.modules.scala_collection_mutable_OpenHashMap().nextPowerOfTwo__I__I(initialSize);
  this.scala$collection$mutable$OpenHashMap$$mask$5 = (this.actualInitialSize$5 - 1);
  this.scala$collection$mutable$OpenHashMap$$table$5 = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_mutable_OpenHashMap$OpenEntry.getArrayOf(), [this.actualInitialSize$5]);
  this.$$undsize$5 = 0;
  this.scala$collection$mutable$OpenHashMap$$deleted$5 = 0;
  this.scala$collection$mutable$OpenHashMap$$modCount$f = 0;
  return this
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.init___I.call(this, 8);
  return this
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$put__O__I__O__ = (function(key, hash, value) {
  return this.scala$collection$mutable$OpenHashMap$$put__O__I__O__Lscala_Option(key, hash, value)
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$addEntry__Lscala_collection_mutable_OpenHashMap$OpenEntry__ = (function(entry) {
  return ScalaJS.bV(this.scala$collection$mutable$OpenHashMap$$addEntry__Lscala_collection_mutable_OpenHashMap$OpenEntry__V(entry))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.hashOf__O__ = (function(key$2) {
  return ScalaJS.bI(this.hashOf__O__I(key$2))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$size$und$eq__I__ = (function(s) {
  return ScalaJS.bV(this.scala$collection$mutable$OpenHashMap$$size$und$eq__I__V(s))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$deleted$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.scala$collection$mutable$OpenHashMap$$deleted$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$deleted__ = (function() {
  return ScalaJS.bI(this.scala$collection$mutable$OpenHashMap$$deleted__I())
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$table__ = (function() {
  return this.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.scala$collection$mutable$OpenHashMap$$mask__ = (function() {
  return ScalaJS.bI(this.scala$collection$mutable$OpenHashMap$$mask__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_OpenHashMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_OpenHashMap.prototype = ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype;
ScalaJS.is.scala_collection_mutable_OpenHashMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_OpenHashMap)))
});
ScalaJS.as.scala_collection_mutable_OpenHashMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_OpenHashMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.OpenHashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_OpenHashMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_OpenHashMap)))
});
ScalaJS.asArrayOf.scala_collection_mutable_OpenHashMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_OpenHashMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.OpenHashMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_OpenHashMap = new ScalaJS.ClassTypeData({
  scala_collection_mutable_OpenHashMap: 0
}, false, "scala.collection.mutable.OpenHashMap", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_mutable_OpenHashMap: 1,
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap.prototype.$classData = ScalaJS.data.scala_collection_mutable_OpenHashMap;
//@ sourceMappingURL=OpenHashMap.js.map
