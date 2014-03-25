/** @constructor */
ScalaJS.c.scala_collection_mutable_HashMap = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.$$undloadFactor$5 = 0;
  this.table$5 = null;
  this.tableSize$5 = 0;
  this.threshold$5 = 0;
  this.sizemap$5 = null;
  this.seedvalue$5 = 0
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_mutable_HashMap.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashMap;
ScalaJS.c.scala_collection_mutable_HashMap.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$undloadFactor__I = (function() {
  return this.$$undloadFactor$5
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$undloadFactor$und$eq__I__V = (function(x$1) {
  this.$$undloadFactor$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.table__ALscala_collection_mutable_HashEntry = (function() {
  return this.table$5
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.table$und$eq__ALscala_collection_mutable_HashEntry__V = (function(x$1) {
  this.table$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.tableSize__I = (function() {
  return this.tableSize$5
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.tableSize$und$eq__I__V = (function(x$1) {
  this.tableSize$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.threshold__I = (function() {
  return this.threshold$5
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.threshold$und$eq__I__V = (function(x$1) {
  this.threshold$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizemap__AI = (function() {
  return this.sizemap$5
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizemap$und$eq__AI__V = (function(x$1) {
  this.sizemap$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.seedvalue__I = (function() {
  return this.seedvalue$5
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.seedvalue$und$eq__I__V = (function(x$1) {
  this.seedvalue$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.tableSizeSeed__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__tableSizeSeed__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.initialSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__initialSize__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.init__Ljava_io_ObjectInputStream__Lscala_Function0__V = (function(in$2, readEntry) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__init__Lscala_collection_mutable_HashTable__Ljava_io_ObjectInputStream__Lscala_Function0__V(this, in$2, readEntry)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V = (function(out, writeEntry) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__serializeTo__Lscala_collection_mutable_HashTable__Ljava_io_ObjectOutputStream__Lscala_Function1__V(this, out, writeEntry)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.findEntry__O__Lscala_collection_mutable_HashEntry = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__findEntry__Lscala_collection_mutable_HashTable__O__Lscala_collection_mutable_HashEntry(this, key)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.addEntry__Lscala_collection_mutable_HashEntry__V = (function(e) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__addEntry__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashEntry__V(this, e)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry = (function(key, value) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__findOrAddEntry__Lscala_collection_mutable_HashTable__O__O__Lscala_collection_mutable_HashEntry(this, key, value)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.removeEntry__O__Lscala_collection_mutable_HashEntry = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__removeEntry__Lscala_collection_mutable_HashTable__O__Lscala_collection_mutable_HashEntry(this, key)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.entriesIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__entriesIterator__Lscala_collection_mutable_HashTable__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.foreachEntry__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__foreachEntry__Lscala_collection_mutable_HashTable__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.clearTable__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__clearTable__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.nnSizeMapAdd__I__V = (function(h) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapAdd__Lscala_collection_mutable_HashTable__I__V(this, h)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.nnSizeMapRemove__I__V = (function(h) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapRemove__Lscala_collection_mutable_HashTable__I__V(this, h)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.nnSizeMapReset__I__V = (function(tableLength) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapReset__Lscala_collection_mutable_HashTable__I__V(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.totalSizeMapBuckets__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__totalSizeMapBuckets__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.calcSizeMapSize__I__I = (function(tableLength) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__calcSizeMapSize__Lscala_collection_mutable_HashTable__I__I(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapInit__I__V = (function(tableLength) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapInit__Lscala_collection_mutable_HashTable__I__V(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapInitAndRebuild__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapInitAndRebuild__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.printSizeMap__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__printSizeMap__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapDisable__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapDisable__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.isSizeMapDefined__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__isSizeMapDefined__Lscala_collection_mutable_HashTable__Z(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.alwaysInitSizeMap__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__alwaysInitSizeMap__Lscala_collection_mutable_HashTable__Z(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.elemEquals__O__O__Z = (function(key1, key2) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__elemEquals__Lscala_collection_mutable_HashTable__O__O__Z(this, key1, key2)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.index__I__I = (function(hcode) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__index__Lscala_collection_mutable_HashTable__I__I(this, hcode)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.initWithContents__Lscala_collection_mutable_HashTable$Contents__V = (function(c) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__initWithContents__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashTable$Contents__V(this, c)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.hashTableContents__Lscala_collection_mutable_HashTable$Contents = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__hashTableContents__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashTable$Contents(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapBucketBitSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__sizeMapBucketBitSize__Lscala_collection_mutable_HashTable$HashUtils__I(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapBucketSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__sizeMapBucketSize__Lscala_collection_mutable_HashTable$HashUtils__I(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.elemHashCode__O__I = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__elemHashCode__Lscala_collection_mutable_HashTable$HashUtils__O__I(this, key)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.improve__I__I__I = (function(hcode, seed) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__improve__Lscala_collection_mutable_HashTable$HashUtils__I__I__I(this, hcode, seed)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.empty__Lscala_collection_mutable_HashMap = (function() {
  return ScalaJS.modules.scala_collection_mutable_HashMap().empty__Lscala_collection_mutable_HashMap()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.clear__V = (function() {
  this.clearTable__V()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.size__I = (function() {
  return this.tableSize__I()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.par__Lscala_collection_parallel_mutable_ParHashMap = (function() {
  return new ScalaJS.c.scala_collection_parallel_mutable_ParHashMap().init___Lscala_collection_mutable_HashTable$Contents(this.hashTableContents__Lscala_collection_mutable_HashTable$Contents())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.contains__O__Z = (function(key) {
  return (!ScalaJS.anyRefEqEq(this.findEntry__O__Lscala_collection_mutable_HashEntry(key), null))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.apply__O__O = (function(key) {
  var result = ScalaJS.as.scala_collection_mutable_DefaultEntry(this.findEntry__O__Lscala_collection_mutable_HashEntry(key));
  if ((result === null)) {
    return this.$default__O__O(key)
  } else {
    return result.value__O()
  }
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.get__O__Lscala_Option = (function(key) {
  var e = ScalaJS.as.scala_collection_mutable_DefaultEntry(this.findEntry__O__Lscala_collection_mutable_HashEntry(key));
  if ((e === null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(e.value__O())
  }
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.put__O__O__Lscala_Option = (function(key, value) {
  var e = ScalaJS.as.scala_collection_mutable_DefaultEntry(this.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry(key, value));
  if ((e === null)) {
    return ScalaJS.modules.scala_None()
  } else {
    var v = e.value__O();
    e.value$und$eq__O__V(value);
    return new ScalaJS.c.scala_Some().init___O(v)
  }
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.update__O__O__V = (function(key, value) {
  this.put__O__O__Lscala_Option(key, value)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.remove__O__Lscala_Option = (function(key) {
  var e = ScalaJS.as.scala_collection_mutable_DefaultEntry(this.removeEntry__O__Lscala_collection_mutable_HashEntry(key));
  if ((e !== null)) {
    return new ScalaJS.c.scala_Some().init___O(e.value__O())
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_HashMap = (function(kv) {
  var e = ScalaJS.as.scala_collection_mutable_DefaultEntry(this.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry(kv.$$und1__O(), kv.$$und2__O()));
  if ((e !== null)) {
    e.value$und$eq__O__V(kv.$$und2__O())
  };
  return this
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$minus$eq__O__Lscala_collection_mutable_HashMap = (function(key) {
  this.removeEntry__O__Lscala_collection_mutable_HashEntry(key);
  return this
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.entriesIterator__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(e) {
      return new ScalaJS.c.scala_Tuple2().init___O__O(e.key__O(), e.value__O())
    })
  })()))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.foreachEntry__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(f$1) {
    return (function(e) {
      return f$1.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(e.key__O(), e.value__O()))
    })
  })(f)))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.keySet__Lscala_collection_Set = (function() {
  return new ScalaJS.c.scala_collection_mutable_HashMap$$anon$1().init___Lscala_collection_mutable_HashMap(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.values__Lscala_collection_Iterable = (function() {
  return new ScalaJS.c.scala_collection_mutable_HashMap$$anon$2().init___Lscala_collection_mutable_HashMap(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.keysIterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_HashMap$$anon$3().init___Lscala_collection_mutable_HashMap(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.valuesIterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_HashMap$$anon$4().init___Lscala_collection_mutable_HashMap(this)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.useSizeMap__Z__V = (function(t) {
  if (t) {
    if ((!this.isSizeMapDefined__Z())) {
      this.sizeMapInitAndRebuild__V()
    }
  } else {
    this.sizeMapDisable__V()
  }
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.createNewEntry__O__O__Lscala_collection_mutable_DefaultEntry = (function(key, value) {
  return new ScalaJS.c.scala_collection_mutable_DefaultEntry().init___O__O(key, value)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.writeObject__p5__Ljava_io_ObjectOutputStream__V = (function(out) {
  this.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V(out, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(out$1) {
    return (function(entry) {
      out$1.writeObject__O__V(entry.key__O());
      out$1.writeObject__O__V(entry.value__O());
      return ScalaJS.bV(undefined)
    })
  })(out)))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.readObject__p5__Ljava_io_ObjectInputStream__V = (function(in$2) {
  this.init__Ljava_io_ObjectInputStream__Lscala_Function0__V(in$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, in$1) {
    return (function() {
      return arg$outer.createNewEntry__O__O__Lscala_collection_mutable_DefaultEntry(in$1.readObject__O(), in$1.readObject__O())
    })
  })(this, in$2)))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Map(elem)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.createNewEntry__O__O__Lscala_collection_mutable_HashEntry = (function(key, value) {
  return this.createNewEntry__O__O__Lscala_collection_mutable_DefaultEntry(key, value)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_HashMap(elem)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__O__Lscala_collection_mutable_HashMap(key)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_HashMap(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_HashMap(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_HashMap(kv)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_mutable_ParHashMap()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_HashMap()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return this.empty__Lscala_collection_mutable_HashMap()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.init___Lscala_collection_mutable_HashTable$Contents = (function(contents) {
  ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__$init$__Lscala_collection_mutable_HashTable$HashUtils__V(this);
  ScalaJS.impls.scala_collection_mutable_HashTable$class__$init$__Lscala_collection_mutable_HashTable__V(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  this.initWithContents__Lscala_collection_mutable_HashTable$Contents__V(contents);
  return this
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_HashMap.prototype.init___Lscala_collection_mutable_HashTable$Contents.call(this, null);
  return this
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.improve__I__I__ = (function(hcode, seed) {
  return ScalaJS.bI(this.improve__I__I__I(hcode, seed))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.elemHashCode__O__ = (function(key) {
  return ScalaJS.bI(this.elemHashCode__O__I(key))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapBucketSize__ = (function() {
  return ScalaJS.bI(this.sizeMapBucketSize__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapBucketBitSize__ = (function() {
  return ScalaJS.bI(this.sizeMapBucketBitSize__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.hashTableContents__ = (function() {
  return this.hashTableContents__Lscala_collection_mutable_HashTable$Contents()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.initWithContents__Lscala_collection_mutable_HashTable$Contents__ = (function(c) {
  return ScalaJS.bV(this.initWithContents__Lscala_collection_mutable_HashTable$Contents__V(c))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.index__I__ = (function(hcode$2) {
  return ScalaJS.bI(this.index__I__I(hcode$2))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.elemEquals__O__O__ = (function(key1, key2) {
  return ScalaJS.bZ(this.elemEquals__O__O__Z(key1, key2))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.alwaysInitSizeMap__ = (function() {
  return ScalaJS.bZ(this.alwaysInitSizeMap__Z())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.isSizeMapDefined__ = (function() {
  return ScalaJS.bZ(this.isSizeMapDefined__Z())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapDisable__ = (function() {
  return ScalaJS.bV(this.sizeMapDisable__V())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.printSizeMap__ = (function() {
  return ScalaJS.bV(this.printSizeMap__V())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapInitAndRebuild__ = (function() {
  return ScalaJS.bV(this.sizeMapInitAndRebuild__V())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizeMapInit__I__ = (function(tableLength) {
  return ScalaJS.bV(this.sizeMapInit__I__V(tableLength))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.calcSizeMapSize__I__ = (function(tableLength$2) {
  return ScalaJS.bI(this.calcSizeMapSize__I__I(tableLength$2))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.totalSizeMapBuckets__ = (function() {
  return ScalaJS.bI(this.totalSizeMapBuckets__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.nnSizeMapReset__I__ = (function(tableLength$3) {
  return ScalaJS.bV(this.nnSizeMapReset__I__V(tableLength$3))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.nnSizeMapRemove__I__ = (function(h) {
  return ScalaJS.bV(this.nnSizeMapRemove__I__V(h))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.nnSizeMapAdd__I__ = (function(h$2) {
  return ScalaJS.bV(this.nnSizeMapAdd__I__V(h$2))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.clearTable__ = (function() {
  return ScalaJS.bV(this.clearTable__V())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.foreachEntry__Lscala_Function1__ = (function(f) {
  return this.foreachEntry__Lscala_Function1__V(f)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.entriesIterator__ = (function() {
  return this.entriesIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.removeEntry__O__ = (function(key$2) {
  return this.removeEntry__O__Lscala_collection_mutable_HashEntry(key$2)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.findOrAddEntry__O__O__ = (function(key$3, value) {
  return this.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry(key$3, value)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.addEntry__Lscala_collection_mutable_HashEntry__ = (function(e) {
  return ScalaJS.bV(this.addEntry__Lscala_collection_mutable_HashEntry__V(e))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.findEntry__O__ = (function(key$4) {
  return this.findEntry__O__Lscala_collection_mutable_HashEntry(key$4)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__ = (function(out, writeEntry) {
  return ScalaJS.bV(this.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V(out, writeEntry))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.init__Ljava_io_ObjectInputStream__Lscala_Function0__ = (function(in$2, readEntry) {
  return ScalaJS.bV(this.init__Ljava_io_ObjectInputStream__Lscala_Function0__V(in$2, readEntry))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.initialSize__ = (function() {
  return ScalaJS.bI(this.initialSize__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.tableSizeSeed__ = (function() {
  return ScalaJS.bI(this.tableSizeSeed__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.seedvalue$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.seedvalue$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.seedvalue__ = (function() {
  return ScalaJS.bI(this.seedvalue__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizemap$und$eq__AI__ = (function(x$1$2) {
  return ScalaJS.bV(this.sizemap$und$eq__AI__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.sizemap__ = (function() {
  return this.sizemap__AI()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.threshold$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.threshold$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.threshold__ = (function() {
  return ScalaJS.bI(this.threshold__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.tableSize$und$eq__I__ = (function(x$1$4) {
  return ScalaJS.bV(this.tableSize$und$eq__I__V(x$1$4))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.tableSize__ = (function() {
  return ScalaJS.bI(this.tableSize__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.table$und$eq__ALscala_collection_mutable_HashEntry__ = (function(x$1$5) {
  return ScalaJS.bV(this.table$und$eq__ALscala_collection_mutable_HashEntry__V(x$1$5))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.table__ = (function() {
  return this.table__ALscala_collection_mutable_HashEntry()
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$undloadFactor$und$eq__I__ = (function(x$1$6) {
  return ScalaJS.bV(this.$$undloadFactor$und$eq__I__V(x$1$6))
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$$undloadFactor__ = (function() {
  return ScalaJS.bI(this.$$undloadFactor__I())
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.createNewEntry__O__O__ = (function(key$5, value$2) {
  return this.createNewEntry__O__O__Lscala_collection_mutable_DefaultEntry(key$5, value$2)
});
ScalaJS.c.scala_collection_mutable_HashMap.prototype.useSizeMap__Z__ = (function(t) {
  return ScalaJS.bV(this.useSizeMap__Z__V(t))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashMap.prototype = ScalaJS.c.scala_collection_mutable_HashMap.prototype;
ScalaJS.is.scala_collection_mutable_HashMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashMap)))
});
ScalaJS.as.scala_collection_mutable_HashMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashMap)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashMap = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashMap: 0
}, false, "scala.collection.mutable.HashMap", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_mutable_HashMap: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_HashTable: 1,
  scala_collection_mutable_HashTable$HashUtils: 1,
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
ScalaJS.c.scala_collection_mutable_HashMap.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashMap;
//@ sourceMappingURL=HashMap.js.map
