/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashSet = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSet.call(this);
  this.firstEntry$5 = null;
  this.lastEntry$5 = null;
  this.$$undloadFactor$5 = 0;
  this.table$5 = null;
  this.tableSize$5 = 0;
  this.threshold$5 = 0;
  this.sizemap$5 = null;
  this.seedvalue$5 = 0
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSet();
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashSet;
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$undloadFactor__I = (function() {
  return this.$$undloadFactor$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$undloadFactor$und$eq__I__V = (function(x$1) {
  this.$$undloadFactor$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.table__ALscala_collection_mutable_HashEntry = (function() {
  return this.table$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.table$und$eq__ALscala_collection_mutable_HashEntry__V = (function(x$1) {
  this.table$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.tableSize__I = (function() {
  return this.tableSize$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.tableSize$und$eq__I__V = (function(x$1) {
  this.tableSize$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.threshold__I = (function() {
  return this.threshold$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.threshold$und$eq__I__V = (function(x$1) {
  this.threshold$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizemap__AI = (function() {
  return this.sizemap$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizemap$und$eq__AI__V = (function(x$1) {
  this.sizemap$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.seedvalue__I = (function() {
  return this.seedvalue$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.seedvalue$und$eq__I__V = (function(x$1) {
  this.seedvalue$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.tableSizeSeed__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__tableSizeSeed__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.initialSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__initialSize__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.init__Ljava_io_ObjectInputStream__Lscala_Function0__V = (function(in$2, readEntry) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__init__Lscala_collection_mutable_HashTable__Ljava_io_ObjectInputStream__Lscala_Function0__V(this, in$2, readEntry)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V = (function(out, writeEntry) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__serializeTo__Lscala_collection_mutable_HashTable__Ljava_io_ObjectOutputStream__Lscala_Function1__V(this, out, writeEntry)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.findEntry__O__Lscala_collection_mutable_HashEntry = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__findEntry__Lscala_collection_mutable_HashTable__O__Lscala_collection_mutable_HashEntry(this, key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.addEntry__Lscala_collection_mutable_HashEntry__V = (function(e) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__addEntry__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashEntry__V(this, e)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry = (function(key, value) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__findOrAddEntry__Lscala_collection_mutable_HashTable__O__O__Lscala_collection_mutable_HashEntry(this, key, value)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.removeEntry__O__Lscala_collection_mutable_HashEntry = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__removeEntry__Lscala_collection_mutable_HashTable__O__Lscala_collection_mutable_HashEntry(this, key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.entriesIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__entriesIterator__Lscala_collection_mutable_HashTable__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.clearTable__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__clearTable__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.nnSizeMapAdd__I__V = (function(h) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapAdd__Lscala_collection_mutable_HashTable__I__V(this, h)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.nnSizeMapRemove__I__V = (function(h) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapRemove__Lscala_collection_mutable_HashTable__I__V(this, h)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.nnSizeMapReset__I__V = (function(tableLength) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapReset__Lscala_collection_mutable_HashTable__I__V(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.totalSizeMapBuckets__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__totalSizeMapBuckets__Lscala_collection_mutable_HashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.calcSizeMapSize__I__I = (function(tableLength) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__calcSizeMapSize__Lscala_collection_mutable_HashTable__I__I(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapInit__I__V = (function(tableLength) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapInit__Lscala_collection_mutable_HashTable__I__V(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapInitAndRebuild__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapInitAndRebuild__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.printSizeMap__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__printSizeMap__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapDisable__V = (function() {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapDisable__Lscala_collection_mutable_HashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.isSizeMapDefined__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__isSizeMapDefined__Lscala_collection_mutable_HashTable__Z(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.alwaysInitSizeMap__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__alwaysInitSizeMap__Lscala_collection_mutable_HashTable__Z(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.elemEquals__O__O__Z = (function(key1, key2) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__elemEquals__Lscala_collection_mutable_HashTable__O__O__Z(this, key1, key2)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.index__I__I = (function(hcode) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__index__Lscala_collection_mutable_HashTable__I__I(this, hcode)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.initWithContents__Lscala_collection_mutable_HashTable$Contents__V = (function(c) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__initWithContents__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashTable$Contents__V(this, c)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.hashTableContents__Lscala_collection_mutable_HashTable$Contents = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__hashTableContents__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashTable$Contents(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapBucketBitSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__sizeMapBucketBitSize__Lscala_collection_mutable_HashTable$HashUtils__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapBucketSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__sizeMapBucketSize__Lscala_collection_mutable_HashTable$HashUtils__I(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.elemHashCode__O__I = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__elemHashCode__Lscala_collection_mutable_HashTable$HashUtils__O__I(this, key)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.improve__I__I__I = (function(hcode, seed) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__improve__Lscala_collection_mutable_HashTable$HashUtils__I__I__I(this, hcode, seed)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_mutable_LinkedHashSet()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.firstEntry__Lscala_collection_mutable_LinkedHashSet$Entry = (function() {
  return this.firstEntry$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.firstEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V = (function(x$1) {
  this.firstEntry$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.lastEntry__Lscala_collection_mutable_LinkedHashSet$Entry = (function() {
  return this.lastEntry$5
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.lastEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V = (function(x$1) {
  this.lastEntry$5 = x$1
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.size__I = (function() {
  return this.tableSize__I()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.contains__O__Z = (function(elem) {
  return (this.findEntry__O__Lscala_collection_mutable_HashEntry(elem) !== null)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$plus$eq__O__Lscala_collection_mutable_LinkedHashSet = (function(elem) {
  this.add__O__Z(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$minus$eq__O__Lscala_collection_mutable_LinkedHashSet = (function(elem) {
  this.remove__O__Z(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.add__O__Z = (function(elem) {
  return (this.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry(elem, null) === null)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.remove__O__Z = (function(elem) {
  var e = ScalaJS.as.scala_collection_mutable_LinkedHashSet$Entry(this.removeEntry__O__Lscala_collection_mutable_HashEntry(elem));
  if ((e === null)) {
    return false
  } else {
    if ((e.earlier__Lscala_collection_mutable_LinkedHashSet$Entry() === null)) {
      this.firstEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(e.later__Lscala_collection_mutable_LinkedHashSet$Entry())
    } else {
      e.earlier__Lscala_collection_mutable_LinkedHashSet$Entry().later$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(e.later__Lscala_collection_mutable_LinkedHashSet$Entry())
    };
    if ((e.later__Lscala_collection_mutable_LinkedHashSet$Entry() === null)) {
      this.lastEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(e.earlier__Lscala_collection_mutable_LinkedHashSet$Entry())
    } else {
      e.later__Lscala_collection_mutable_LinkedHashSet$Entry().earlier$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(e.earlier__Lscala_collection_mutable_LinkedHashSet$Entry())
    };
    return true
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_LinkedHashSet$$anon$1().init___Lscala_collection_mutable_LinkedHashSet(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.foreach__Lscala_Function1__V = (function(f) {
  var cur = this.firstEntry__Lscala_collection_mutable_LinkedHashSet$Entry();
  while ((cur !== null)) {
    f.apply__O__O(cur.key__O());
    cur = cur.later__Lscala_collection_mutable_LinkedHashSet$Entry()
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.foreachEntry__Lscala_Function1__V = (function(f) {
  var cur = this.firstEntry__Lscala_collection_mutable_LinkedHashSet$Entry();
  while ((cur !== null)) {
    f.apply__O__O(cur);
    cur = cur.later__Lscala_collection_mutable_LinkedHashSet$Entry()
  }
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.createNewEntry__O__O__Lscala_collection_mutable_LinkedHashSet$Entry = (function(key, dummy) {
  var e = new ScalaJS.c.scala_collection_mutable_LinkedHashSet$Entry().init___O(key);
  if ((this.firstEntry__Lscala_collection_mutable_LinkedHashSet$Entry() === null)) {
    this.firstEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(e)
  } else {
    this.lastEntry__Lscala_collection_mutable_LinkedHashSet$Entry().later$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(e);
    e.earlier$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(this.lastEntry__Lscala_collection_mutable_LinkedHashSet$Entry())
  };
  this.lastEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(e);
  return e
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.clear__V = (function() {
  this.clearTable__V();
  this.firstEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(null)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.writeObject__p5__Ljava_io_ObjectOutputStream__V = (function(out) {
  this.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V(out, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(out$1) {
    return (function(e) {
      out$1.writeObject__O__V(e.key__O());
      return ScalaJS.bV(undefined)
    })
  })(out)))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.readObject__p5__Ljava_io_ObjectInputStream__V = (function(in$2) {
  this.firstEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(null);
  this.lastEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(null);
  this.init__Ljava_io_ObjectInputStream__Lscala_Function0__V(in$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, in$1) {
    return (function() {
      return arg$outer.createNewEntry__O__O__Lscala_collection_mutable_LinkedHashSet$Entry(in$1.readObject__O(), null)
    })
  })(this, in$2)))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.empty__Lscala_collection_Set = (function() {
  return ScalaJS.as.scala_collection_Set(this.empty__Lscala_collection_GenSet())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set(xs)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set = (function(elems) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set(elems)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set = (function(elem1, elem2, elems) {
  return this.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.createNewEntry__O__O__Lscala_collection_mutable_HashEntry = (function(key, value) {
  return this.createNewEntry__O__O__Lscala_collection_mutable_LinkedHashSet$Entry(key, value)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_LinkedHashSet(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$minus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_LinkedHashSet(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_LinkedHashSet(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_LinkedHashSet(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$plus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_LinkedHashSet(elem)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSet.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__$init$__Lscala_collection_mutable_HashTable$HashUtils__V(this);
  ScalaJS.impls.scala_collection_mutable_HashTable$class__$init$__Lscala_collection_mutable_HashTable__V(this);
  this.firstEntry$5 = null;
  this.lastEntry$5 = null;
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.improve__I__I__ = (function(hcode, seed) {
  return ScalaJS.bI(this.improve__I__I__I(hcode, seed))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.elemHashCode__O__ = (function(key) {
  return ScalaJS.bI(this.elemHashCode__O__I(key))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapBucketSize__ = (function() {
  return ScalaJS.bI(this.sizeMapBucketSize__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapBucketBitSize__ = (function() {
  return ScalaJS.bI(this.sizeMapBucketBitSize__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.hashTableContents__ = (function() {
  return this.hashTableContents__Lscala_collection_mutable_HashTable$Contents()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.initWithContents__Lscala_collection_mutable_HashTable$Contents__ = (function(c) {
  return ScalaJS.bV(this.initWithContents__Lscala_collection_mutable_HashTable$Contents__V(c))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.index__I__ = (function(hcode$2) {
  return ScalaJS.bI(this.index__I__I(hcode$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.elemEquals__O__O__ = (function(key1, key2) {
  return ScalaJS.bZ(this.elemEquals__O__O__Z(key1, key2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.alwaysInitSizeMap__ = (function() {
  return ScalaJS.bZ(this.alwaysInitSizeMap__Z())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.isSizeMapDefined__ = (function() {
  return ScalaJS.bZ(this.isSizeMapDefined__Z())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapDisable__ = (function() {
  return ScalaJS.bV(this.sizeMapDisable__V())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.printSizeMap__ = (function() {
  return ScalaJS.bV(this.printSizeMap__V())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapInitAndRebuild__ = (function() {
  return ScalaJS.bV(this.sizeMapInitAndRebuild__V())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizeMapInit__I__ = (function(tableLength) {
  return ScalaJS.bV(this.sizeMapInit__I__V(tableLength))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.calcSizeMapSize__I__ = (function(tableLength$2) {
  return ScalaJS.bI(this.calcSizeMapSize__I__I(tableLength$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.totalSizeMapBuckets__ = (function() {
  return ScalaJS.bI(this.totalSizeMapBuckets__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.nnSizeMapReset__I__ = (function(tableLength$3) {
  return ScalaJS.bV(this.nnSizeMapReset__I__V(tableLength$3))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.nnSizeMapRemove__I__ = (function(h) {
  return ScalaJS.bV(this.nnSizeMapRemove__I__V(h))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.nnSizeMapAdd__I__ = (function(h$2) {
  return ScalaJS.bV(this.nnSizeMapAdd__I__V(h$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.clearTable__ = (function() {
  return ScalaJS.bV(this.clearTable__V())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.entriesIterator__ = (function() {
  return this.entriesIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.removeEntry__O__ = (function(key$2) {
  return this.removeEntry__O__Lscala_collection_mutable_HashEntry(key$2)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.findOrAddEntry__O__O__ = (function(key$3, value) {
  return this.findOrAddEntry__O__O__Lscala_collection_mutable_HashEntry(key$3, value)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.addEntry__Lscala_collection_mutable_HashEntry__ = (function(e) {
  return ScalaJS.bV(this.addEntry__Lscala_collection_mutable_HashEntry__V(e))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.findEntry__O__ = (function(key$4) {
  return this.findEntry__O__Lscala_collection_mutable_HashEntry(key$4)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__ = (function(out, writeEntry) {
  return ScalaJS.bV(this.serializeTo__Ljava_io_ObjectOutputStream__Lscala_Function1__V(out, writeEntry))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.init__Ljava_io_ObjectInputStream__Lscala_Function0__ = (function(in$2, readEntry) {
  return ScalaJS.bV(this.init__Ljava_io_ObjectInputStream__Lscala_Function0__V(in$2, readEntry))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.initialSize__ = (function() {
  return ScalaJS.bI(this.initialSize__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.tableSizeSeed__ = (function() {
  return ScalaJS.bI(this.tableSizeSeed__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.seedvalue$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.seedvalue$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.seedvalue__ = (function() {
  return ScalaJS.bI(this.seedvalue__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizemap$und$eq__AI__ = (function(x$1$2) {
  return ScalaJS.bV(this.sizemap$und$eq__AI__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.sizemap__ = (function() {
  return this.sizemap__AI()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.threshold$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.threshold$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.threshold__ = (function() {
  return ScalaJS.bI(this.threshold__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.tableSize$und$eq__I__ = (function(x$1$4) {
  return ScalaJS.bV(this.tableSize$und$eq__I__V(x$1$4))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.tableSize__ = (function() {
  return ScalaJS.bI(this.tableSize__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.table$und$eq__ALscala_collection_mutable_HashEntry__ = (function(x$1$5) {
  return ScalaJS.bV(this.table$und$eq__ALscala_collection_mutable_HashEntry__V(x$1$5))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.table__ = (function() {
  return this.table__ALscala_collection_mutable_HashEntry()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$undloadFactor$und$eq__I__ = (function(x$1$6) {
  return ScalaJS.bV(this.$$undloadFactor$und$eq__I__V(x$1$6))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$$undloadFactor__ = (function() {
  return ScalaJS.bI(this.$$undloadFactor__I())
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.createNewEntry__O__O__ = (function(key$5, dummy) {
  return this.createNewEntry__O__O__Lscala_collection_mutable_LinkedHashSet$Entry(key$5, dummy)
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.foreachEntry__Lscala_Function1__ = (function(f) {
  return ScalaJS.bV(this.foreachEntry__Lscala_Function1__V(f))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.lastEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__ = (function(x$1$7) {
  return ScalaJS.bV(this.lastEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(x$1$7))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.lastEntry__ = (function() {
  return this.lastEntry__Lscala_collection_mutable_LinkedHashSet$Entry()
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.firstEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__ = (function(x$1$8) {
  return ScalaJS.bV(this.firstEntry$und$eq__Lscala_collection_mutable_LinkedHashSet$Entry__V(x$1$8))
});
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.firstEntry__ = (function() {
  return this.firstEntry__Lscala_collection_mutable_LinkedHashSet$Entry()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashSet.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashSet)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashSet")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashSet)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashSet;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashSet = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashSet: 0
}, false, "scala.collection.mutable.LinkedHashSet", ScalaJS.data.scala_collection_mutable_AbstractSet, {
  scala_collection_mutable_LinkedHashSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_HashTable: 1,
  scala_collection_mutable_HashTable$HashUtils: 1,
  scala_collection_mutable_AbstractSet: 1,
  scala_collection_mutable_Set: 1,
  scala_collection_mutable_SetLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
  scala_collection_mutable_AbstractIterable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_LinkedHashSet.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashSet;
//@ sourceMappingURL=LinkedHashSet.js.map
