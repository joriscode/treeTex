/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashMap = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.firstEntry$5 = null;
  this.lastEntry$5 = null;
  this.$$undloadFactor$5 = 0;
  this.table$5 = null;
  this.tableSize$5 = 0;
  this.threshold$5 = 0;
  this.sizemap$5 = null;
  this.seedvalue$5 = 0
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashMap;
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$undloadFactor__I = (function() {
  return this.$$undloadFactor$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$undloadFactor$und$eq__I__V = (function(x$1) {
  this.$$undloadFactor$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.table__ALscala_collection_mutable_HashEntry = (function() {
  return this.table$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.table$und$eq__ALscala_collection_mutable_HashEntry__V = (function(x$1) {
  this.table$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.tableSize__I = (function() {
  return this.tableSize$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.tableSize$und$eq__I__V = (function(x$1) {
  this.tableSize$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.threshold__I = (function() {
  return this.threshold$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.threshold$und$eq__I__V = (function(x$1) {
  this.threshold$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizemap__AI = (function() {
  return this.sizemap$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizemap$und$eq__AI__V = (function(x$1) {
  this.sizemap$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.seedvalue__I = (function() {
  return this.seedvalue$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.seedvalue$und$eq__I__V = (function(x$1) {
  this.seedvalue$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.tableSizeSeed__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__tableSizeSeed__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.initialSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__initialSize__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.init__Ljava_io_ObjectInputStream__Lscala_Function0__V = (function(in$2, readEntry) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__init__Lscala_collection_mutable_HashTable__Ljava_io_ObjectInputStream__Lscala_Function0__V(this, in$2, readEntry)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V = (function(out, writeEntry) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__serializeTo__Lscala_collection_mutable_HashTable__Ljava_io_ObjectOutputStream__Lscala_Function1__V(this, out, writeEntry)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.findEntry__O__Lscala_collection_mutable_HashEntry = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__findEntry__Lscala_collection_mutable_HashTable__O__Lscala_collection_mutable_HashEntry(this, key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.addEntry__Lscala_collection_mutable_HashEntry__V = (function(e) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__addEntry__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashEntry__V(this, e)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry = (function(key, value) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__findOrAddEntry__Lscala_collection_mutable_HashTable__O__O__Lscala_collection_mutable_HashEntry(this, key, value)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.removeEntry__O__Lscala_collection_mutable_HashEntry = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__removeEntry__Lscala_collection_mutable_HashTable__O__Lscala_collection_mutable_HashEntry(this, key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.entriesIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__entriesIterator__Lscala_collection_mutable_HashTable__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.clearTable__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__clearTable__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.nnSizeMapAdd__I__V = (function(h) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapAdd__Lscala_collection_mutable_HashTable__I__V(this, h)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.nnSizeMapRemove__I__V = (function(h) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapRemove__Lscala_collection_mutable_HashTable__I__V(this, h)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.nnSizeMapReset__I__V = (function(tableLength) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapReset__Lscala_collection_mutable_HashTable__I__V(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.totalSizeMapBuckets__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__totalSizeMapBuckets__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.calcSizeMapSize__I__I = (function(tableLength) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__calcSizeMapSize__Lscala_collection_mutable_HashTable__I__I(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapInit__I__V = (function(tableLength) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapInit__Lscala_collection_mutable_HashTable__I__V(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapInitAndRebuild__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapInitAndRebuild__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.printSizeMap__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__printSizeMap__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapDisable__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapDisable__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.isSizeMapDefined__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__isSizeMapDefined__Lscala_collection_mutable_HashTable__Z(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.alwaysInitSizeMap__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__alwaysInitSizeMap__Lscala_collection_mutable_HashTable__Z(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.elemEquals__O__O__Z = (function(key1, key2) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__elemEquals__Lscala_collection_mutable_HashTable__O__O__Z(this, key1, key2)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.index__I__I = (function(hcode) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__index__Lscala_collection_mutable_HashTable__I__I(this, hcode)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.initWithContents__Lscala_collection_mutable_HashTable$Contents__V = (function(c) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__initWithContents__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashTable$Contents__V(this, c)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.hashTableContents__Lscala_collection_mutable_HashTable$Contents = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__hashTableContents__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashTable$Contents(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapBucketBitSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__sizeMapBucketBitSize__Lscala_collection_mutable_HashTable$HashUtils__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapBucketSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__sizeMapBucketSize__Lscala_collection_mutable_HashTable$HashUtils__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.elemHashCode__O__I = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__elemHashCode__Lscala_collection_mutable_HashTable$HashUtils__O__I(this, key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.improve__I__I__I = (function(hcode, seed) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__improve__Lscala_collection_mutable_HashTable$HashUtils__I__I__I(this, hcode, seed)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.empty__Lscala_collection_mutable_LinkedHashMap = (function() {
  return ScalaJS.modules.scala_collection_mutable_LinkedHashMap().empty__Lscala_collection_mutable_LinkedHashMap()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.size__I = (function() {
  return this.tableSize__I()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.firstEntry__Lscala_collection_mutable_LinkedEntry = (function() {
  return this.firstEntry$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.firstEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V = (function(x$1) {
  this.firstEntry$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.lastEntry__Lscala_collection_mutable_LinkedEntry = (function() {
  return this.lastEntry$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.lastEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V = (function(x$1) {
  this.lastEntry$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.get__O__Lscala_Option = (function(key) {
  var e = ScalaJS.as.scala_collection_mutable_LinkedEntry(this.findEntry__O__Lscala_collection_mutable_HashEntry(key));
  if (ScalaJS.anyRefEqEq(e, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(e.value__O())
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.put__O__O__Lscala_Option = (function(key, value) {
  var e = ScalaJS.as.scala_collection_mutable_LinkedEntry(this.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry(key, value));
  if ((e === null)) {
    return ScalaJS.modules.scala_None()
  } else {
    var v = e.value__O();
    e.value$und$eq__O__V(value);
    return new ScalaJS.c.scala_Some().init___O(v)
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.remove__O__Lscala_Option = (function(key) {
  var e = ScalaJS.as.scala_collection_mutable_LinkedEntry(this.removeEntry__O__Lscala_collection_mutable_HashEntry(key));
  if ((e === null)) {
    return ScalaJS.modules.scala_None()
  } else {
    if ((e.earlier__Lscala_collection_mutable_LinkedEntry() === null)) {
      this.firstEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(e.later__Lscala_collection_mutable_LinkedEntry())
    } else {
      e.earlier__Lscala_collection_mutable_LinkedEntry().later$und$eq__Lscala_collection_mutable_LinkedEntry__V(e.later__Lscala_collection_mutable_LinkedEntry())
    };
    if ((e.later__Lscala_collection_mutable_LinkedEntry() === null)) {
      this.lastEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(e.earlier__Lscala_collection_mutable_LinkedEntry())
    } else {
      e.later__Lscala_collection_mutable_LinkedEntry().earlier$und$eq__Lscala_collection_mutable_LinkedEntry__V(e.earlier__Lscala_collection_mutable_LinkedEntry())
    };
    return new ScalaJS.c.scala_Some().init___O(e.value__O())
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_LinkedHashMap = (function(kv) {
  this.put__O__O__Lscala_Option(kv.$$und1__O(), kv.$$und2__O());
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$minus$eq__O__Lscala_collection_mutable_LinkedHashMap = (function(key) {
  this.remove__O__Lscala_Option(key);
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$1().init___Lscala_collection_mutable_LinkedHashMap(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys().init___Lscala_collection_mutable_LinkedHashMap__Lscala_Function1(this, p)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.mapValues__Lscala_Function1__Lscala_collection_Map = (function(f) {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashMap$MappedValues().init___Lscala_collection_mutable_LinkedHashMap__Lscala_Function1(this, f)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.keySet__Lscala_collection_Set = (function() {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet().init___Lscala_collection_mutable_LinkedHashMap(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.keysIterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$2().init___Lscala_collection_mutable_LinkedHashMap(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.valuesIterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashMap$$anon$3().init___Lscala_collection_mutable_LinkedHashMap(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.foreach__Lscala_Function1__V = (function(f) {
  var cur = this.firstEntry__Lscala_collection_mutable_LinkedEntry();
  while ((cur !== null)) {
    f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(cur.key__O(), cur.value__O()));
    cur = cur.later__Lscala_collection_mutable_LinkedEntry()
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.foreachEntry__Lscala_Function1__V = (function(f) {
  var cur = this.firstEntry__Lscala_collection_mutable_LinkedEntry();
  while ((cur !== null)) {
    f.apply__O__O(cur);
    cur = cur.later__Lscala_collection_mutable_LinkedEntry()
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.createNewEntry__O__O__Lscala_collection_mutable_LinkedEntry = (function(key, value) {
  var e = new ScalaJS.c.scala_collection_mutable_LinkedEntry().init___O__O(key, value);
  if ((this.firstEntry__Lscala_collection_mutable_LinkedEntry() === null)) {
    this.firstEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(e)
  } else {
    this.lastEntry__Lscala_collection_mutable_LinkedEntry().later$und$eq__Lscala_collection_mutable_LinkedEntry__V(e);
    e.earlier$und$eq__Lscala_collection_mutable_LinkedEntry__V(this.lastEntry__Lscala_collection_mutable_LinkedEntry())
  };
  this.lastEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(e);
  return e
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.clear__V = (function() {
  this.clearTable__V();
  this.firstEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(null)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.writeObject__p5__Ljava_io_ObjectOutputStream__V = (function(out) {
  this.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V(out, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(out$1) {
    return (function(entry) {
      out$1.writeObject__O__V(entry.key__O());
      out$1.writeObject__O__V(entry.value__O());
      return ScalaJS.bV(undefined)
    })
  })(out)))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.readObject__p5__Ljava_io_ObjectInputStream__V = (function(in$2) {
  this.firstEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(null);
  this.lastEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(null);
  this.init__Ljava_io_ObjectInputStream__Lscala_Function0__V(in$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, in$1) {
    return (function() {
      return arg$outer.createNewEntry__O__O__Lscala_collection_mutable_LinkedEntry(in$1.readObject__O(), in$1.readObject__O())
    })
  })(this, in$2)))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Map(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.createNewEntry__O__O__Lscala_collection_mutable_HashEntry = (function(key, value) {
  return this.createNewEntry__O__O__Lscala_collection_mutable_LinkedEntry(key, value)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_LinkedHashMap(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__O__Lscala_collection_mutable_LinkedHashMap(key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_LinkedHashMap(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_LinkedHashMap(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_LinkedHashMap(kv)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_LinkedHashMap()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return this.empty__Lscala_collection_mutable_LinkedHashMap()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__$init$__Lscala_collection_mutable_HashTable$HashUtils__V(this);
  ScalaJS.impls.scala_collection_mutable_HashTable$class__$init$__Lscala_collection_mutable_HashTable__V(this);
  this.firstEntry$5 = null;
  this.lastEntry$5 = null;
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.improve__I__I__ = (function(hcode, seed) {
  return ScalaJS.bI(this.improve__I__I__I(hcode, seed))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.elemHashCode__O__ = (function(key) {
  return ScalaJS.bI(this.elemHashCode__O__I(key))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapBucketSize__ = (function() {
  return ScalaJS.bI(this.sizeMapBucketSize__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapBucketBitSize__ = (function() {
  return ScalaJS.bI(this.sizeMapBucketBitSize__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.hashTableContents__ = (function() {
  return this.hashTableContents__Lscala_collection_mutable_HashTable$Contents()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.initWithContents__Lscala_collection_mutable_HashTable$Contents__ = (function(c) {
  return ScalaJS.bV(this.initWithContents__Lscala_collection_mutable_HashTable$Contents__V(c))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.index__I__ = (function(hcode$2) {
  return ScalaJS.bI(this.index__I__I(hcode$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.elemEquals__O__O__ = (function(key1, key2) {
  return ScalaJS.bZ(this.elemEquals__O__O__Z(key1, key2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.alwaysInitSizeMap__ = (function() {
  return ScalaJS.bZ(this.alwaysInitSizeMap__Z())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.isSizeMapDefined__ = (function() {
  return ScalaJS.bZ(this.isSizeMapDefined__Z())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapDisable__ = (function() {
  return ScalaJS.bV(this.sizeMapDisable__V())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.printSizeMap__ = (function() {
  return ScalaJS.bV(this.printSizeMap__V())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapInitAndRebuild__ = (function() {
  return ScalaJS.bV(this.sizeMapInitAndRebuild__V())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizeMapInit__I__ = (function(tableLength) {
  return ScalaJS.bV(this.sizeMapInit__I__V(tableLength))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.calcSizeMapSize__I__ = (function(tableLength$2) {
  return ScalaJS.bI(this.calcSizeMapSize__I__I(tableLength$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.totalSizeMapBuckets__ = (function() {
  return ScalaJS.bI(this.totalSizeMapBuckets__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.nnSizeMapReset__I__ = (function(tableLength$3) {
  return ScalaJS.bV(this.nnSizeMapReset__I__V(tableLength$3))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.nnSizeMapRemove__I__ = (function(h) {
  return ScalaJS.bV(this.nnSizeMapRemove__I__V(h))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.nnSizeMapAdd__I__ = (function(h$2) {
  return ScalaJS.bV(this.nnSizeMapAdd__I__V(h$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.clearTable__ = (function() {
  return ScalaJS.bV(this.clearTable__V())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.entriesIterator__ = (function() {
  return this.entriesIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.removeEntry__O__ = (function(key$2) {
  return this.removeEntry__O__Lscala_collection_mutable_HashEntry(key$2)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.findOrAddEntry__O__O__ = (function(key$3, value) {
  return this.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry(key$3, value)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.addEntry__Lscala_collection_mutable_HashEntry__ = (function(e) {
  return ScalaJS.bV(this.addEntry__Lscala_collection_mutable_HashEntry__V(e))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.findEntry__O__ = (function(key$4) {
  return this.findEntry__O__Lscala_collection_mutable_HashEntry(key$4)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__ = (function(out, writeEntry) {
  return ScalaJS.bV(this.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V(out, writeEntry))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.init__Ljava_io_ObjectInputStream__Lscala_Function0__ = (function(in$2, readEntry) {
  return ScalaJS.bV(this.init__Ljava_io_ObjectInputStream__Lscala_Function0__V(in$2, readEntry))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.initialSize__ = (function() {
  return ScalaJS.bI(this.initialSize__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.tableSizeSeed__ = (function() {
  return ScalaJS.bI(this.tableSizeSeed__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.seedvalue$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.seedvalue$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.seedvalue__ = (function() {
  return ScalaJS.bI(this.seedvalue__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizemap$und$eq__AI__ = (function(x$1$2) {
  return ScalaJS.bV(this.sizemap$und$eq__AI__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.sizemap__ = (function() {
  return this.sizemap__AI()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.threshold$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.threshold$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.threshold__ = (function() {
  return ScalaJS.bI(this.threshold__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.tableSize$und$eq__I__ = (function(x$1$4) {
  return ScalaJS.bV(this.tableSize$und$eq__I__V(x$1$4))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.tableSize__ = (function() {
  return ScalaJS.bI(this.tableSize__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.table$und$eq__ALscala_collection_mutable_HashEntry__ = (function(x$1$5) {
  return ScalaJS.bV(this.table$und$eq__ALscala_collection_mutable_HashEntry__V(x$1$5))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.table__ = (function() {
  return this.table__ALscala_collection_mutable_HashEntry()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$undloadFactor$und$eq__I__ = (function(x$1$6) {
  return ScalaJS.bV(this.$$undloadFactor$und$eq__I__V(x$1$6))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$$undloadFactor__ = (function() {
  return ScalaJS.bI(this.$$undloadFactor__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.createNewEntry__O__O__ = (function(key$5, value$2) {
  return this.createNewEntry__O__O__Lscala_collection_mutable_LinkedEntry(key$5, value$2)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.foreachEntry__Lscala_Function1__ = (function(f) {
  return ScalaJS.bV(this.foreachEntry__Lscala_Function1__V(f))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.lastEntry$und$eq__Lscala_collection_mutable_LinkedEntry__ = (function(x$1$7) {
  return ScalaJS.bV(this.lastEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(x$1$7))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.lastEntry__ = (function() {
  return this.lastEntry__Lscala_collection_mutable_LinkedEntry()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.firstEntry$und$eq__Lscala_collection_mutable_LinkedEntry__ = (function(x$1$8) {
  return ScalaJS.bV(this.firstEntry$und$eq__Lscala_collection_mutable_LinkedEntry__V(x$1$8))
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.firstEntry__ = (function() {
  return this.firstEntry__Lscala_collection_mutable_LinkedEntry()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashMap)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashMap)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashMap = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashMap: 0
}, false, "scala.collection.mutable.LinkedHashMap", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_mutable_LinkedHashMap: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_mutable_LinkedHashMap.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashMap;
//@ sourceMappingURL=LinkedHashMap.js.map
