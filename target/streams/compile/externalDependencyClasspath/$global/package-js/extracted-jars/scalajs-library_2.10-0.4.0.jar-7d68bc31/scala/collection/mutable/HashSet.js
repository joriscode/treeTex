/** @constructor */
ScalaJS.c.scala_collection_mutable_HashSet = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSet.call(this);
  this.$$undloadFactor$5 = 0;
  this.table$5 = null;
  this.tableSize$5 = 0;
  this.threshold$5 = 0;
  this.sizemap$5 = null;
  this.seedvalue$5 = 0
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSet();
ScalaJS.c.scala_collection_mutable_HashSet.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashSet;
ScalaJS.c.scala_collection_mutable_HashSet.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$undloadFactor__I = (function() {
  return this.$$undloadFactor$5
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$undloadFactor$und$eq__I__V = (function(x$1) {
  this.$$undloadFactor$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.table__AO = (function() {
  return this.table$5
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.table$und$eq__AO__V = (function(x$1) {
  this.table$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.tableSize__I = (function() {
  return this.tableSize$5
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.tableSize$und$eq__I__V = (function(x$1) {
  this.tableSize$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.threshold__I = (function() {
  return this.threshold$5
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.threshold$und$eq__I__V = (function(x$1) {
  this.threshold$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizemap__AI = (function() {
  return this.sizemap$5
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizemap$und$eq__AI__V = (function(x$1) {
  this.sizemap$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.seedvalue__I = (function() {
  return this.seedvalue$5
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.seedvalue$und$eq__I__V = (function(x$1) {
  this.seedvalue$5 = x$1
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.capacity__I__I = (function(expectedSize) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__capacity__Lscala_collection_mutable_FlatHashTable__I__I(this, expectedSize)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.initialSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__initialSize__Lscala_collection_mutable_FlatHashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.randomSeed__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__randomSeed__Lscala_collection_mutable_FlatHashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.tableSizeSeed__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__tableSizeSeed__Lscala_collection_mutable_FlatHashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.init__Ljava_io_ObjectInputStream__Lscala_Function1__V = (function(in$2, f) {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__init__Lscala_collection_mutable_FlatHashTable__Ljava_io_ObjectInputStream__Lscala_Function1__V(this, in$2, f)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.serializeTo__Ljava_io_ObjectOutputStream__V = (function(out) {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__serializeTo__Lscala_collection_mutable_FlatHashTable__Ljava_io_ObjectOutputStream__V(this, out)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.findEntry__O__Lscala_Option = (function(elem) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__findEntry__Lscala_collection_mutable_FlatHashTable__O__Lscala_Option(this, elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.containsEntry__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__containsEntry__Lscala_collection_mutable_FlatHashTable__O__Z(this, elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.addEntry__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__addEntry__Lscala_collection_mutable_FlatHashTable__O__Z(this, elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.removeEntry__O__Lscala_Option = (function(elem) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__removeEntry__Lscala_collection_mutable_FlatHashTable__O__Lscala_Option(this, elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.nnSizeMapAdd__I__V = (function(h) {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__nnSizeMapAdd__Lscala_collection_mutable_FlatHashTable__I__V(this, h)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.nnSizeMapRemove__I__V = (function(h) {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__nnSizeMapRemove__Lscala_collection_mutable_FlatHashTable__I__V(this, h)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.nnSizeMapReset__I__V = (function(tableLength) {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__nnSizeMapReset__Lscala_collection_mutable_FlatHashTable__I__V(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.totalSizeMapBuckets__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__totalSizeMapBuckets__Lscala_collection_mutable_FlatHashTable__I(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.calcSizeMapSize__I__I = (function(tableLength) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__calcSizeMapSize__Lscala_collection_mutable_FlatHashTable__I__I(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapInit__I__V = (function(tableLength) {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__sizeMapInit__Lscala_collection_mutable_FlatHashTable__I__V(this, tableLength)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapInitAndRebuild__V = (function() {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__sizeMapInitAndRebuild__Lscala_collection_mutable_FlatHashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.printSizeMap__V = (function() {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__printSizeMap__Lscala_collection_mutable_FlatHashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.printContents__V = (function() {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__printContents__Lscala_collection_mutable_FlatHashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapDisable__V = (function() {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__sizeMapDisable__Lscala_collection_mutable_FlatHashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.isSizeMapDefined__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__isSizeMapDefined__Lscala_collection_mutable_FlatHashTable__Z(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.alwaysInitSizeMap__Z = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__alwaysInitSizeMap__Lscala_collection_mutable_FlatHashTable__Z(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.index__I__I = (function(hcode) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__index__Lscala_collection_mutable_FlatHashTable__I__I(this, hcode)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.clearTable__V = (function() {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__clearTable__Lscala_collection_mutable_FlatHashTable__V(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.hashTableContents__Lscala_collection_mutable_FlatHashTable$Contents = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__hashTableContents__Lscala_collection_mutable_FlatHashTable__Lscala_collection_mutable_FlatHashTable$Contents(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.initWithContents__Lscala_collection_mutable_FlatHashTable$Contents__V = (function(c) {
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__initWithContents__Lscala_collection_mutable_FlatHashTable__Lscala_collection_mutable_FlatHashTable$Contents__V(this, c)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapBucketBitSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__sizeMapBucketBitSize__Lscala_collection_mutable_FlatHashTable$HashUtils__I(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapBucketSize__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__sizeMapBucketSize__Lscala_collection_mutable_FlatHashTable$HashUtils__I(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.elemHashCode__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__elemHashCode__Lscala_collection_mutable_FlatHashTable$HashUtils__O__I(this, elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.improve__I__I__I = (function(hcode, seed) {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__improve__Lscala_collection_mutable_FlatHashTable$HashUtils__I__I__I(this, hcode, seed)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_mutable_HashSet()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.size__I = (function() {
  return this.tableSize__I()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.contains__O__Z = (function(elem) {
  return this.containsEntry__O__Z(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$plus$eq__O__Lscala_collection_mutable_HashSet = (function(elem) {
  this.addEntry__O__Z(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$minus$eq__O__Lscala_collection_mutable_HashSet = (function(elem) {
  this.removeEntry__O__Lscala_Option(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.par__Lscala_collection_parallel_mutable_ParHashSet = (function() {
  return new ScalaJS.c.scala_collection_parallel_mutable_ParHashSet().init___Lscala_collection_mutable_FlatHashTable$Contents(this.hashTableContents__Lscala_collection_mutable_FlatHashTable$Contents())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.add__O__Z = (function(elem) {
  return this.addEntry__O__Z(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.remove__O__Z = (function(elem) {
  return this.removeEntry__O__Lscala_Option(elem).isDefined__Z()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.clear__V = (function() {
  this.clearTable__V()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__iterator__Lscala_collection_mutable_FlatHashTable__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.foreach__Lscala_Function1__V = (function(f) {
  var i = 0;
  var len = this.table__AO().underlying.length;
  while ((i < len)) {
    var elem = this.table__AO().underlying[i];
    if ((elem !== null)) {
      f.apply__O__O(elem)
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    i = (i + 1)
  }
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.clone__Lscala_collection_mutable_HashSet = (function() {
  return ScalaJS.as.scala_collection_mutable_HashSet(new ScalaJS.c.scala_collection_mutable_HashSet().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.writeObject__p5__Ljava_io_ObjectOutputStream__V = (function(s) {
  this.serializeTo__Ljava_io_ObjectOutputStream__V(s)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.readObject__p5__Ljava_io_ObjectInputStream__V = (function(in$2) {
  this.init__Ljava_io_ObjectInputStream__Lscala_Function1__V(in$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return ScalaJS.bV(undefined)
    })
  })()))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.useSizeMap__Z__V = (function(t) {
  if (t) {
    if ((!this.isSizeMapDefined__Z())) {
      this.sizeMapInitAndRebuild__V()
    }
  } else {
    this.sizeMapDisable__V()
  }
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.empty__Lscala_collection_Set = (function() {
  return ScalaJS.as.scala_collection_Set(this.empty__Lscala_collection_GenSet())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set(xs)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set = (function(elems) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set(elems)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set = (function(elem1, elem2, elems) {
  return this.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_HashSet()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.clone__Lscala_collection_mutable_Set = (function() {
  return this.clone__Lscala_collection_mutable_HashSet()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_mutable_ParHashSet()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_HashSet(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$minus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_HashSet(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_HashSet(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_HashSet(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$plus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_HashSet(elem)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.init___Lscala_collection_mutable_FlatHashTable$Contents = (function(contents) {
  ScalaJS.c.scala_collection_mutable_AbstractSet.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__$init$__Lscala_collection_mutable_FlatHashTable$HashUtils__V(this);
  ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__$init$__Lscala_collection_mutable_FlatHashTable__V(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  this.initWithContents__Lscala_collection_mutable_FlatHashTable$Contents__V(contents);
  return this
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_HashSet.prototype.init___Lscala_collection_mutable_FlatHashTable$Contents.call(this, null);
  return this
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.improve__I__I__ = (function(hcode, seed) {
  return ScalaJS.bI(this.improve__I__I__I(hcode, seed))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.elemHashCode__O__ = (function(elem) {
  return ScalaJS.bI(this.elemHashCode__O__I(elem))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapBucketSize__ = (function() {
  return ScalaJS.bI(this.sizeMapBucketSize__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapBucketBitSize__ = (function() {
  return ScalaJS.bI(this.sizeMapBucketBitSize__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.initWithContents__Lscala_collection_mutable_FlatHashTable$Contents__ = (function(c) {
  return ScalaJS.bV(this.initWithContents__Lscala_collection_mutable_FlatHashTable$Contents__V(c))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.hashTableContents__ = (function() {
  return this.hashTableContents__Lscala_collection_mutable_FlatHashTable$Contents()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.clearTable__ = (function() {
  return ScalaJS.bV(this.clearTable__V())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.index__I__ = (function(hcode$2) {
  return ScalaJS.bI(this.index__I__I(hcode$2))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.alwaysInitSizeMap__ = (function() {
  return ScalaJS.bZ(this.alwaysInitSizeMap__Z())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.isSizeMapDefined__ = (function() {
  return ScalaJS.bZ(this.isSizeMapDefined__Z())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapDisable__ = (function() {
  return ScalaJS.bV(this.sizeMapDisable__V())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.printContents__ = (function() {
  return ScalaJS.bV(this.printContents__V())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.printSizeMap__ = (function() {
  return ScalaJS.bV(this.printSizeMap__V())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapInitAndRebuild__ = (function() {
  return ScalaJS.bV(this.sizeMapInitAndRebuild__V())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizeMapInit__I__ = (function(tableLength) {
  return ScalaJS.bV(this.sizeMapInit__I__V(tableLength))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.calcSizeMapSize__I__ = (function(tableLength$2) {
  return ScalaJS.bI(this.calcSizeMapSize__I__I(tableLength$2))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.totalSizeMapBuckets__ = (function() {
  return ScalaJS.bI(this.totalSizeMapBuckets__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.nnSizeMapReset__I__ = (function(tableLength$3) {
  return ScalaJS.bV(this.nnSizeMapReset__I__V(tableLength$3))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.nnSizeMapRemove__I__ = (function(h) {
  return ScalaJS.bV(this.nnSizeMapRemove__I__V(h))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.nnSizeMapAdd__I__ = (function(h$2) {
  return ScalaJS.bV(this.nnSizeMapAdd__I__V(h$2))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.removeEntry__O__ = (function(elem$2) {
  return this.removeEntry__O__Lscala_Option(elem$2)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.addEntry__O__ = (function(elem$3) {
  return ScalaJS.bZ(this.addEntry__O__Z(elem$3))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.containsEntry__O__ = (function(elem$4) {
  return ScalaJS.bZ(this.containsEntry__O__Z(elem$4))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.findEntry__O__ = (function(elem$5) {
  return this.findEntry__O__Lscala_Option(elem$5)
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.serializeTo__Ljava_io_ObjectOutputStream__ = (function(out) {
  return ScalaJS.bV(this.serializeTo__Ljava_io_ObjectOutputStream__V(out))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.init__Ljava_io_ObjectInputStream__Lscala_Function1__ = (function(in$2, f) {
  return ScalaJS.bV(this.init__Ljava_io_ObjectInputStream__Lscala_Function1__V(in$2, f))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.tableSizeSeed__ = (function() {
  return ScalaJS.bI(this.tableSizeSeed__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.randomSeed__ = (function() {
  return ScalaJS.bI(this.randomSeed__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.initialSize__ = (function() {
  return ScalaJS.bI(this.initialSize__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.capacity__I__ = (function(expectedSize) {
  return ScalaJS.bI(this.capacity__I__I(expectedSize))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.seedvalue$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.seedvalue$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.seedvalue__ = (function() {
  return ScalaJS.bI(this.seedvalue__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizemap$und$eq__AI__ = (function(x$1$2) {
  return ScalaJS.bV(this.sizemap$und$eq__AI__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.sizemap__ = (function() {
  return this.sizemap__AI()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.threshold$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.threshold$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.threshold__ = (function() {
  return ScalaJS.bI(this.threshold__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.tableSize$und$eq__I__ = (function(x$1$4) {
  return ScalaJS.bV(this.tableSize$und$eq__I__V(x$1$4))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.tableSize__ = (function() {
  return ScalaJS.bI(this.tableSize__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.table$und$eq__AO__ = (function(x$1$5) {
  return ScalaJS.bV(this.table$und$eq__AO__V(x$1$5))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.table__ = (function() {
  return this.table__AO()
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$undloadFactor$und$eq__I__ = (function(x$1$6) {
  return ScalaJS.bV(this.$$undloadFactor$und$eq__I__V(x$1$6))
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$$undloadFactor__ = (function() {
  return ScalaJS.bI(this.$$undloadFactor__I())
});
ScalaJS.c.scala_collection_mutable_HashSet.prototype.useSizeMap__Z__ = (function(t) {
  return ScalaJS.bV(this.useSizeMap__Z__V(t))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashSet.prototype = ScalaJS.c.scala_collection_mutable_HashSet.prototype;
ScalaJS.is.scala_collection_mutable_HashSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashSet)))
});
ScalaJS.as.scala_collection_mutable_HashSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashSet")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashSet)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashSet;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashSet = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashSet: 0
}, false, "scala.collection.mutable.HashSet", ScalaJS.data.scala_collection_mutable_AbstractSet, {
  scala_collection_mutable_HashSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_FlatHashTable: 1,
  scala_collection_mutable_FlatHashTable$HashUtils: 1,
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
ScalaJS.c.scala_collection_mutable_HashSet.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashSet;
//@ sourceMappingURL=HashSet.js.map
