ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__tableDebug__Lscala_collection_mutable_FlatHashTable__Z = (function($$this) {
  return false
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__capacity__Lscala_collection_mutable_FlatHashTable__I__I = (function($$this, expectedSize) {
  if ((expectedSize === 0)) {
    return 1
  } else {
    return ScalaJS.modules.scala_collection_mutable_HashTable().powerOfTwo__I__I(expectedSize)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__initialSize__Lscala_collection_mutable_FlatHashTable__I = (function($$this) {
  return 32
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__initialCapacity__Lscala_collection_mutable_FlatHashTable__I = (function($$this) {
  return $$this.capacity__I__I($$this.initialSize__I())
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__randomSeed__Lscala_collection_mutable_FlatHashTable__I = (function($$this) {
  return ScalaJS.as.scala_util_Random(ScalaJS.modules.scala_collection_mutable_FlatHashTable().seedGenerator__Ljava_lang_ThreadLocal().get__O()).nextInt__I()
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__tableSizeSeed__Lscala_collection_mutable_FlatHashTable__I = (function($$this) {
  return ScalaJS.modules.java_lang_Integer().bitCount__I__I(($$this.table__AO().underlying.length - 1))
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__init__Lscala_collection_mutable_FlatHashTable__Ljava_io_ObjectInputStream__Lscala_Function1__V = (function($$this, in$2, f) {
  in$2.defaultReadObject__V();
  $$this.$$undloadFactor$und$eq__I__V(in$2.readInt__I());
  ScalaJS.modules.scala_Predef().assert__Z__V(($$this.$$undloadFactor__I() > 0));
  var size = in$2.readInt__I();
  $$this.tableSize$und$eq__I__V(0);
  ScalaJS.modules.scala_Predef().assert__Z__V((size >= 0));
  $$this.table$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [$$this.capacity__I__I(ScalaJS.modules.scala_collection_mutable_FlatHashTable().sizeForThreshold__I__I__I(size, $$this.$$undloadFactor__I()))]));
  $$this.threshold$und$eq__I__V(ScalaJS.modules.scala_collection_mutable_FlatHashTable().newThreshold__I__I__I($$this.$$undloadFactor__I(), ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps($$this.table__AO()).size__I()));
  $$this.seedvalue$und$eq__I__V(in$2.readInt__I());
  var smDefined = in$2.readBoolean__Z();
  if (smDefined) {
    $$this.sizeMapInit__I__V($$this.table__AO().underlying.length)
  } else {
    $$this.sizemap$und$eq__AI__V(null)
  };
  var index = 0;
  while ((index < size)) {
    var elem = in$2.readObject__O();
    f.apply__O__O(elem);
    $$this.addEntry__O__Z(elem);
    index = (index + 1)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__serializeTo__Lscala_collection_mutable_FlatHashTable__Ljava_io_ObjectOutputStream__V = (function($$this, out) {
  out.defaultWriteObject__V();
  out.writeInt__I__V($$this.$$undloadFactor__I());
  out.writeInt__I__V($$this.tableSize__I());
  out.writeInt__I__V($$this.seedvalue__I());
  out.writeBoolean__Z__V($$this.isSizeMapDefined__Z());
  $$this.iterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(out$1) {
    return (function(x$1) {
      out$1.writeObject__O__V(x$1);
      return ScalaJS.bV(undefined)
    })
  })(out)))
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__findEntry__Lscala_collection_mutable_FlatHashTable__O__Lscala_Option = (function($$this, elem) {
  var entry = ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__findEntryImpl__Lscala_collection_mutable_FlatHashTable__O__O($$this, elem);
  if (ScalaJS.anyRefEqEq(null, entry)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(entry)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__containsEntry__Lscala_collection_mutable_FlatHashTable__O__Z = (function($$this, elem) {
  return (!ScalaJS.anyRefEqEq(null, ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__findEntryImpl__Lscala_collection_mutable_FlatHashTable__O__O($$this, elem)))
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__findEntryImpl__Lscala_collection_mutable_FlatHashTable__O__O = (function($$this, elem) {
  var h = $$this.index__I__I($$this.elemHashCode__O__I(elem));
  var entry = $$this.table__AO().underlying[h];
  while (((!ScalaJS.anyRefEqEq(null, entry)) && (!ScalaJS.anyEqEq(entry, elem)))) {
    h = ((h + 1) % $$this.table__AO().underlying.length);
    entry = $$this.table__AO().underlying[h]
  };
  return entry
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__addEntry__Lscala_collection_mutable_FlatHashTable__O__Z = (function($$this, elem) {
  var h = $$this.index__I__I($$this.elemHashCode__O__I(elem));
  var entry = $$this.table__AO().underlying[h];
  while ((!ScalaJS.anyRefEqEq(null, entry))) {
    if (ScalaJS.anyEqEq(entry, elem)) {
      return false
    };
    h = ((h + 1) % $$this.table__AO().underlying.length);
    entry = $$this.table__AO().underlying[h]
  };
  $$this.table__AO().underlying[h] = elem;
  $$this.tableSize$und$eq__I__V(($$this.tableSize__I() + 1));
  $$this.nnSizeMapAdd__I__V(h);
  if (($$this.tableSize__I() >= $$this.threshold__I())) {
    ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__growTable__Lscala_collection_mutable_FlatHashTable__V($$this)
  };
  return true
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__removeEntry__Lscala_collection_mutable_FlatHashTable__O__Lscala_Option = (function($$this, elem) {
  if (ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__tableDebug__Lscala_collection_mutable_FlatHashTable__Z($$this)) {
    ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__checkConsistent__Lscala_collection_mutable_FlatHashTable__V($$this)
  };
  var h = $$this.index__I__I($$this.elemHashCode__O__I(elem));
  var entry = $$this.table__AO().underlying[h];
  while ((!ScalaJS.anyRefEqEq(null, entry))) {
    if (ScalaJS.anyEqEq(entry, elem)) {
      var h0 = h;
      var h1 = ((h0 + 1) % $$this.table__AO().underlying.length);
      while ((!ScalaJS.anyRefEqEq(null, $$this.table__AO().underlying[h1]))) {
        var h2 = $$this.index__I__I($$this.elemHashCode__O__I($$this.table__AO().underlying[h1]));
        if (((h2 !== h1) && ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__precedes$1__Lscala_collection_mutable_FlatHashTable__I__I__Z($$this, h2, h0))) {
          $$this.table__AO().underlying[h0] = $$this.table__AO().underlying[h1];
          h0 = h1
        };
        h1 = ((h1 + 1) % $$this.table__AO().underlying.length)
      };
      $$this.table__AO().underlying[h0] = null;
      $$this.tableSize$und$eq__I__V(($$this.tableSize__I() - 1));
      $$this.nnSizeMapRemove__I__V(h0);
      if (ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__tableDebug__Lscala_collection_mutable_FlatHashTable__Z($$this)) {
        ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__checkConsistent__Lscala_collection_mutable_FlatHashTable__V($$this)
      };
      return new ScalaJS.c.scala_Some().init___O(entry)
    };
    h = ((h + 1) % $$this.table__AO().underlying.length);
    entry = $$this.table__AO().underlying[h]
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__iterator__Lscala_collection_mutable_FlatHashTable__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$1().init___Lscala_collection_mutable_FlatHashTable($$this)
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__growTable__Lscala_collection_mutable_FlatHashTable__V = (function($$this) {
  var oldtable = $$this.table__AO();
  $$this.table$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [($$this.table__AO().underlying.length * 2)]));
  $$this.tableSize$und$eq__I__V(0);
  $$this.nnSizeMapReset__I__V($$this.table__AO().underlying.length);
  $$this.seedvalue$und$eq__I__V($$this.tableSizeSeed__I());
  $$this.threshold$und$eq__I__V(ScalaJS.modules.scala_collection_mutable_FlatHashTable().newThreshold__I__I__I($$this.$$undloadFactor__I(), $$this.table__AO().underlying.length));
  var i = 0;
  while ((i < oldtable.underlying.length)) {
    var entry = oldtable.underlying[i];
    if ((!ScalaJS.anyRefEqEq(null, entry))) {
      ScalaJS.bZ($$this.addEntry__O__Z(entry))
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    i = (i + 1)
  };
  if (ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__tableDebug__Lscala_collection_mutable_FlatHashTable__Z($$this)) {
    ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__checkConsistent__Lscala_collection_mutable_FlatHashTable__V($$this)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__checkConsistent__Lscala_collection_mutable_FlatHashTable__V = (function($$this) {
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), $$this.table__AO().underlying.length).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1().init___Lscala_collection_mutable_FlatHashTable($$this))
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__nnSizeMapAdd__Lscala_collection_mutable_FlatHashTable__I__V = (function($$this, h) {
  if (($$this.sizemap__AI() !== null)) {
    var p = (h >> $$this.sizeMapBucketBitSize__I());
    var ev$1 = $$this.sizemap__AI();
    ev$1.underlying[p] = (ev$1.underlying[p] + 1)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__nnSizeMapRemove__Lscala_collection_mutable_FlatHashTable__I__V = (function($$this, h) {
  if (($$this.sizemap__AI() !== null)) {
    var ev$2 = $$this.sizemap__AI();
    var ev$3 = (h >> $$this.sizeMapBucketBitSize__I());
    ev$2.underlying[ev$3] = (ev$2.underlying[ev$3] - 1)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__nnSizeMapReset__Lscala_collection_mutable_FlatHashTable__I__V = (function($$this, tableLength) {
  if (($$this.sizemap__AI() !== null)) {
    var nsize = $$this.calcSizeMapSize__I__I(tableLength);
    if (($$this.sizemap__AI().underlying.length !== nsize)) {
      $$this.sizemap$und$eq__AI__V(ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [nsize]))
    } else {
      ScalaJS.modules.java_util_Arrays().fill__AI__I__V($$this.sizemap__AI(), 0)
    }
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__totalSizeMapBuckets__Lscala_collection_mutable_FlatHashTable__I = (function($$this) {
  return (((($$this.table__AO().underlying.length - 1) / $$this.sizeMapBucketSize__I()) | 0) + 1)
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__calcSizeMapSize__Lscala_collection_mutable_FlatHashTable__I__I = (function($$this, tableLength) {
  return ((tableLength >> $$this.sizeMapBucketBitSize__I()) + 1)
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__sizeMapInit__Lscala_collection_mutable_FlatHashTable__I__V = (function($$this, tableLength) {
  $$this.sizemap$und$eq__AI__V(ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [$$this.calcSizeMapSize__I__I(tableLength)]))
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__sizeMapInitAndRebuild__Lscala_collection_mutable_FlatHashTable__V = (function($$this) {
  $$this.sizeMapInit__I__V($$this.table__AO().underlying.length);
  var totalbuckets = $$this.totalSizeMapBuckets__I();
  var bucketidx = 0;
  var tableidx = 0;
  var tbl = $$this.table__AO();
  var tableuntil = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I($$this.sizeMapBucketSize__I()), tbl.underlying.length);
  while ((bucketidx < totalbuckets)) {
    var currbucketsz = 0;
    while ((tableidx < tableuntil)) {
      if ((tbl.underlying[tableidx] !== null)) {
        currbucketsz = (currbucketsz + 1)
      };
      tableidx = (tableidx + 1)
    };
    $$this.sizemap__AI().underlying[bucketidx] = currbucketsz;
    tableuntil = (tableuntil + $$this.sizeMapBucketSize__I());
    bucketidx = (bucketidx + 1)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__printSizeMap__Lscala_collection_mutable_FlatHashTable__V = (function($$this) {
  ScalaJS.modules.scala_Predef().println__O__V(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps($$this.sizemap__AI()).mkString__T__T__T__T("szmap: [", ", ", "]"))
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__printContents__Lscala_collection_mutable_FlatHashTable__V = (function($$this) {
  ScalaJS.modules.scala_Predef().println__O__V(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps($$this.table__AO()).mkString__T__T__T__T("[", ", ", "]"))
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__sizeMapDisable__Lscala_collection_mutable_FlatHashTable__V = (function($$this) {
  $$this.sizemap$und$eq__AI__V(null)
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__isSizeMapDefined__Lscala_collection_mutable_FlatHashTable__Z = (function($$this) {
  return ($$this.sizemap__AI() !== null)
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__alwaysInitSizeMap__Lscala_collection_mutable_FlatHashTable__Z = (function($$this) {
  return false
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__index__Lscala_collection_mutable_FlatHashTable__I__I = (function($$this, hcode) {
  var improved = $$this.improve__I__I__I(hcode, $$this.seedvalue__I());
  var ones = ($$this.table__AO().underlying.length - 1);
  return ((improved >>> (32 - ScalaJS.modules.java_lang_Integer().bitCount__I__I(ones))) & ones)
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__clearTable__Lscala_collection_mutable_FlatHashTable__V = (function($$this) {
  var i = ($$this.table__AO().underlying.length - 1);
  while ((i >= 0)) {
    $$this.table__AO().underlying[i] = null;
    i = (i - 1)
  };
  $$this.tableSize$und$eq__I__V(0);
  $$this.nnSizeMapReset__I__V($$this.table__AO().underlying.length)
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__hashTableContents__Lscala_collection_mutable_FlatHashTable__Lscala_collection_mutable_FlatHashTable$Contents = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_FlatHashTable$Contents().init___I__AO__I__I__I__AI($$this.$$undloadFactor__I(), $$this.table__AO(), $$this.tableSize__I(), $$this.threshold__I(), $$this.seedvalue__I(), $$this.sizemap__AI())
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__initWithContents__Lscala_collection_mutable_FlatHashTable__Lscala_collection_mutable_FlatHashTable$Contents__V = (function($$this, c) {
  if ((!ScalaJS.anyRefEqEq(c, null))) {
    $$this.$$undloadFactor$und$eq__I__V(c.loadFactor__I());
    $$this.table$und$eq__AO__V(c.table__AO());
    $$this.tableSize$und$eq__I__V(c.tableSize__I());
    $$this.threshold$und$eq__I__V(c.threshold__I());
    $$this.seedvalue$und$eq__I__V(c.seedvalue__I());
    $$this.sizemap$und$eq__AI__V(c.sizemap__AI())
  };
  if (($$this.alwaysInitSizeMap__Z() && ($$this.sizemap__AI() === null))) {
    $$this.sizeMapInitAndRebuild__V()
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__precedes$1__Lscala_collection_mutable_FlatHashTable__I__I__Z = (function($$this, i, j) {
  var d = ($$this.table__AO().underlying.length >> 1);
  if ((i <= j)) {
    return ((j - i) < d)
  } else {
    return ((i - j) > d)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__$init$__Lscala_collection_mutable_FlatHashTable__V = (function($$this) {
  $$this.$$undloadFactor$und$eq__I__V(ScalaJS.modules.scala_collection_mutable_FlatHashTable().defaultLoadFactor__I());
  $$this.table$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__initialCapacity__Lscala_collection_mutable_FlatHashTable__I($$this)]));
  $$this.tableSize$und$eq__I__V(0);
  $$this.threshold$und$eq__I__V(ScalaJS.modules.scala_collection_mutable_FlatHashTable().newThreshold__I__I__I($$this.$$undloadFactor__I(), ScalaJS.impls.scala_collection_mutable_FlatHashTable$class__initialCapacity__Lscala_collection_mutable_FlatHashTable__I($$this)));
  $$this.sizemap$und$eq__AI__V(null);
  $$this.seedvalue$und$eq__I__V($$this.tableSizeSeed__I())
});
//@ sourceMappingURL=FlatHashTable$class.js.map
