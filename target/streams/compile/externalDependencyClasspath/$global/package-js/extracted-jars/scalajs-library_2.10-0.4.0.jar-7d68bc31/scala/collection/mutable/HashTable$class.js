ScalaJS.impls.scala_collection_mutable_HashTable$class__tableSizeSeed__Lscala_collection_mutable_HashTable__I = (function($$this) {
  return ScalaJS.modules.java_lang_Integer().bitCount__I__I(($$this.table__ALscala_collection_mutable_HashEntry().underlying.length - 1))
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__initialSize__Lscala_collection_mutable_HashTable__I = (function($$this) {
  return 16
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__initialThreshold__Lscala_collection_mutable_HashTable__I__I = (function($$this, _loadFactor) {
  return ScalaJS.modules.scala_collection_mutable_HashTable().newThreshold__I__I__I(_loadFactor, ScalaJS.impls.scala_collection_mutable_HashTable$class__initialCapacity__Lscala_collection_mutable_HashTable__I($$this))
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__initialCapacity__Lscala_collection_mutable_HashTable__I = (function($$this) {
  return ScalaJS.modules.scala_collection_mutable_HashTable().capacity__I__I($$this.initialSize__I())
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$lastPopulatedIndex__Lscala_collection_mutable_HashTable__I = (function($$this) {
  var idx = ($$this.table__ALscala_collection_mutable_HashEntry().underlying.length - 1);
  while ((ScalaJS.anyRefEqEq($$this.table__ALscala_collection_mutable_HashEntry().underlying[idx], null) && (idx > 0))) {
    idx = (idx - 1)
  };
  return idx
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__init__Lscala_collection_mutable_HashTable__Ljava_io_ObjectInputStream__Lscala_Function0__V = (function($$this, in$2, readEntry) {
  in$2.defaultReadObject__V();
  $$this.$$undloadFactor$und$eq__I__V(in$2.readInt__I());
  ScalaJS.modules.scala_Predef().assert__Z__V(($$this.$$undloadFactor__I() > 0));
  var size = in$2.readInt__I();
  $$this.tableSize$und$eq__I__V(0);
  ScalaJS.modules.scala_Predef().assert__Z__V((size >= 0));
  $$this.seedvalue$und$eq__I__V(in$2.readInt__I());
  var smDefined = in$2.readBoolean__Z();
  $$this.table$und$eq__ALscala_collection_mutable_HashEntry__V(ScalaJS.newArrayObject(ScalaJS.data.scala_collection_mutable_HashEntry.getArrayOf(), [ScalaJS.modules.scala_collection_mutable_HashTable().capacity__I__I(ScalaJS.modules.scala_collection_mutable_HashTable().sizeForThreshold__I__I__I($$this.$$undloadFactor__I(), size))]));
  $$this.threshold$und$eq__I__V(ScalaJS.modules.scala_collection_mutable_HashTable().newThreshold__I__I__I($$this.$$undloadFactor__I(), ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object($$this.table__ALscala_collection_mutable_HashEntry(), 1)).size__I()));
  if (smDefined) {
    $$this.sizeMapInit__I__V($$this.table__ALscala_collection_mutable_HashEntry().underlying.length)
  } else {
    $$this.sizemap$und$eq__AI__V(null)
  };
  var index = 0;
  while ((index < size)) {
    $$this.addEntry__Lscala_collection_mutable_HashEntry__V(ScalaJS.as.scala_collection_mutable_HashEntry(readEntry.apply__O()));
    index = (index + 1)
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__serializeTo__Lscala_collection_mutable_HashTable__Ljava_io_ObjectOutputStream__Lscala_Function1__V = (function($$this, out, writeEntry) {
  out.defaultWriteObject__V();
  out.writeInt__I__V($$this.$$undloadFactor__I());
  out.writeInt__I__V($$this.tableSize__I());
  out.writeInt__I__V($$this.seedvalue__I());
  out.writeBoolean__Z__V($$this.isSizeMapDefined__Z());
  $$this.foreachEntry__Lscala_Function1__V(writeEntry)
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__findEntry__Lscala_collection_mutable_HashTable__O__Lscala_collection_mutable_HashEntry = (function($$this, key) {
  return ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$findEntry0__Lscala_collection_mutable_HashTable__O__I__Lscala_collection_mutable_HashEntry($$this, key, $$this.index__I__I($$this.elemHashCode__O__I(key)))
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$findEntry0__Lscala_collection_mutable_HashTable__O__I__Lscala_collection_mutable_HashEntry = (function($$this, key, h) {
  var e = $$this.table__ALscala_collection_mutable_HashEntry().underlying[h];
  while (((!ScalaJS.anyRefEqEq(e, null)) && (!$$this.elemEquals__O__O__Z(e.key__O(), key)))) {
    e = ScalaJS.as.scala_collection_mutable_HashEntry(e.next__O())
  };
  return e
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__addEntry__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashEntry__V = (function($$this, e) {
  ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$addEntry0__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashEntry__I__V($$this, e, $$this.index__I__I($$this.elemHashCode__O__I(e.key__O())))
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$addEntry0__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashEntry__I__V = (function($$this, e, h) {
  e.next$und$eq__O__V($$this.table__ALscala_collection_mutable_HashEntry().underlying[h]);
  $$this.table__ALscala_collection_mutable_HashEntry().underlying[h] = e;
  $$this.tableSize$und$eq__I__V(($$this.tableSize__I() + 1));
  $$this.nnSizeMapAdd__I__V(h);
  if (($$this.tableSize__I() > $$this.threshold__I())) {
    ScalaJS.impls.scala_collection_mutable_HashTable$class__resize__Lscala_collection_mutable_HashTable__I__V($$this, (2 * $$this.table__ALscala_collection_mutable_HashEntry().underlying.length))
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__findOrAddEntry__Lscala_collection_mutable_HashTable__O__O__Lscala_collection_mutable_HashEntry = (function($$this, key, value) {
  var h = $$this.index__I__I($$this.elemHashCode__O__I(key));
  var e = ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$findEntry0__Lscala_collection_mutable_HashTable__O__I__Lscala_collection_mutable_HashEntry($$this, key, h);
  if ((e !== null)) {
    return e
  } else {
    ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$addEntry0__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashEntry__I__V($$this, $$this.createNewEntry__O__O__Lscala_collection_mutable_HashEntry(key, value), h);
    return null
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__removeEntry__Lscala_collection_mutable_HashTable__O__Lscala_collection_mutable_HashEntry = (function($$this, key) {
  var h = $$this.index__I__I($$this.elemHashCode__O__I(key));
  var e = $$this.table__ALscala_collection_mutable_HashEntry().underlying[h];
  if ((!ScalaJS.anyRefEqEq(e, null))) {
    if ($$this.elemEquals__O__O__Z(e.key__O(), key)) {
      $$this.table__ALscala_collection_mutable_HashEntry().underlying[h] = ScalaJS.as.scala_collection_mutable_HashEntry(e.next__O());
      $$this.tableSize$und$eq__I__V(($$this.tableSize__I() - 1));
      $$this.nnSizeMapRemove__I__V(h);
      return e
    } else {
      var e1 = ScalaJS.as.scala_collection_mutable_HashEntry(e.next__O());
      while (((!ScalaJS.anyRefEqEq(e1, null)) && (!$$this.elemEquals__O__O__Z(e1.key__O(), key)))) {
        e = e1;
        e1 = ScalaJS.as.scala_collection_mutable_HashEntry(e1.next__O())
      };
      if ((!ScalaJS.anyRefEqEq(e1, null))) {
        e.next$und$eq__O__V(e1.next__O());
        $$this.tableSize$und$eq__I__V(($$this.tableSize__I() - 1));
        $$this.nnSizeMapRemove__I__V(h);
        return e1
      }
    }
  };
  return null
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__entriesIterator__Lscala_collection_mutable_HashTable__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_HashTable$$anon$1().init___Lscala_collection_mutable_HashTable($$this)
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__foreachEntry__Lscala_collection_mutable_HashTable__Lscala_Function1__V = (function($$this, f) {
  var iterTable = $$this.table__ALscala_collection_mutable_HashEntry();
  var idx = ScalaJS.impls.scala_collection_mutable_HashTable$class__scala$collection$mutable$HashTable$$lastPopulatedIndex__Lscala_collection_mutable_HashTable__I($$this);
  var es = iterTable.underlying[idx];
  while ((!ScalaJS.anyRefEqEq(es, null))) {
    f.apply__O__O(es);
    es = ScalaJS.as.scala_collection_mutable_HashEntry(es.next__O());
    while ((ScalaJS.anyRefEqEq(es, null) && (idx > 0))) {
      idx = (idx - 1);
      es = iterTable.underlying[idx]
    }
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__clearTable__Lscala_collection_mutable_HashTable__V = (function($$this) {
  var i = ($$this.table__ALscala_collection_mutable_HashEntry().underlying.length - 1);
  while ((i >= 0)) {
    $$this.table__ALscala_collection_mutable_HashEntry().underlying[i] = null;
    i = (i - 1)
  };
  $$this.tableSize$und$eq__I__V(0);
  $$this.nnSizeMapReset__I__V(0)
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__resize__Lscala_collection_mutable_HashTable__I__V = (function($$this, newSize) {
  var oldTable = $$this.table__ALscala_collection_mutable_HashEntry();
  $$this.table$und$eq__ALscala_collection_mutable_HashEntry__V(ScalaJS.newArrayObject(ScalaJS.data.scala_collection_mutable_HashEntry.getArrayOf(), [newSize]));
  $$this.nnSizeMapReset__I__V($$this.table__ALscala_collection_mutable_HashEntry().underlying.length);
  var i = (oldTable.underlying.length - 1);
  while ((i >= 0)) {
    var e = oldTable.underlying[i];
    while ((!ScalaJS.anyRefEqEq(e, null))) {
      var h = $$this.index__I__I($$this.elemHashCode__O__I(e.key__O()));
      var e1 = ScalaJS.as.scala_collection_mutable_HashEntry(e.next__O());
      e.next$und$eq__O__V($$this.table__ALscala_collection_mutable_HashEntry().underlying[h]);
      $$this.table__ALscala_collection_mutable_HashEntry().underlying[h] = e;
      e = e1;
      $$this.nnSizeMapAdd__I__V(h)
    };
    i = (i - 1)
  };
  $$this.threshold$und$eq__I__V(ScalaJS.modules.scala_collection_mutable_HashTable().newThreshold__I__I__I($$this.$$undloadFactor__I(), newSize))
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapAdd__Lscala_collection_mutable_HashTable__I__V = (function($$this, h) {
  if (($$this.sizemap__AI() !== null)) {
    var ev$1 = $$this.sizemap__AI();
    var ev$2 = (h >> $$this.sizeMapBucketBitSize__I());
    ev$1.underlying[ev$2] = (ev$1.underlying[ev$2] + 1)
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapRemove__Lscala_collection_mutable_HashTable__I__V = (function($$this, h) {
  if (($$this.sizemap__AI() !== null)) {
    var ev$3 = $$this.sizemap__AI();
    var ev$4 = (h >> $$this.sizeMapBucketBitSize__I());
    ev$3.underlying[ev$4] = (ev$3.underlying[ev$4] - 1)
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__nnSizeMapReset__Lscala_collection_mutable_HashTable__I__V = (function($$this, tableLength) {
  if (($$this.sizemap__AI() !== null)) {
    var nsize = $$this.calcSizeMapSize__I__I(tableLength);
    if (($$this.sizemap__AI().underlying.length !== nsize)) {
      $$this.sizemap$und$eq__AI__V(ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [nsize]))
    } else {
      ScalaJS.modules.java_util_Arrays().fill__AI__I__V($$this.sizemap__AI(), 0)
    }
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__totalSizeMapBuckets__Lscala_collection_mutable_HashTable__I = (function($$this) {
  if (($$this.sizeMapBucketSize__I() < $$this.table__ALscala_collection_mutable_HashEntry().underlying.length)) {
    return 1
  } else {
    return (($$this.table__ALscala_collection_mutable_HashEntry().underlying.length / $$this.sizeMapBucketSize__I()) | 0)
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__calcSizeMapSize__Lscala_collection_mutable_HashTable__I__I = (function($$this, tableLength) {
  return ((tableLength >> $$this.sizeMapBucketBitSize__I()) + 1)
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapInit__Lscala_collection_mutable_HashTable__I__V = (function($$this, tableLength) {
  $$this.sizemap$und$eq__AI__V(ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [$$this.calcSizeMapSize__I__I(tableLength)]))
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapInitAndRebuild__Lscala_collection_mutable_HashTable__V = (function($$this) {
  $$this.sizeMapInit__I__V($$this.table__ALscala_collection_mutable_HashEntry().underlying.length);
  var tableidx = 0;
  var bucketidx = 0;
  var tbl = $$this.table__ALscala_collection_mutable_HashEntry();
  var tableuntil = 0;
  if ((tbl.underlying.length < $$this.sizeMapBucketSize__I())) {
    tableuntil = tbl.underlying.length
  } else {
    tableuntil = $$this.sizeMapBucketSize__I()
  };
  var totalbuckets = $$this.totalSizeMapBuckets__I();
  while ((bucketidx < totalbuckets)) {
    var currbucketsize = 0;
    while ((tableidx < tableuntil)) {
      var e = tbl.underlying[tableidx];
      while ((e !== null)) {
        currbucketsize = (currbucketsize + 1);
        e = ScalaJS.as.scala_collection_mutable_HashEntry(e.next__O())
      };
      tableidx = (tableidx + 1)
    };
    $$this.sizemap__AI().underlying[bucketidx] = currbucketsize;
    tableuntil = (tableuntil + $$this.sizeMapBucketSize__I());
    bucketidx = (bucketidx + 1)
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__printSizeMap__Lscala_collection_mutable_HashTable__V = (function($$this) {
  ScalaJS.modules.scala_Predef().println__O__V(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps($$this.sizemap__AI()).toList__Lscala_collection_immutable_List())
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__sizeMapDisable__Lscala_collection_mutable_HashTable__V = (function($$this) {
  $$this.sizemap$und$eq__AI__V(null)
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__isSizeMapDefined__Lscala_collection_mutable_HashTable__Z = (function($$this) {
  return ($$this.sizemap__AI() !== null)
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__alwaysInitSizeMap__Lscala_collection_mutable_HashTable__Z = (function($$this) {
  return false
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__elemEquals__Lscala_collection_mutable_HashTable__O__O__Z = (function($$this, key1, key2) {
  return ScalaJS.anyEqEq(key1, key2)
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__index__Lscala_collection_mutable_HashTable__I__I = (function($$this, hcode) {
  var ones = ($$this.table__ALscala_collection_mutable_HashEntry().underlying.length - 1);
  var improved = $$this.improve__I__I__I(hcode, $$this.seedvalue__I());
  var shifted = ((improved >> (32 - ScalaJS.modules.java_lang_Integer().bitCount__I__I(ones))) & ones);
  return shifted
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__initWithContents__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashTable$Contents__V = (function($$this, c) {
  if ((!ScalaJS.anyRefEqEq(c, null))) {
    $$this.$$undloadFactor$und$eq__I__V(c.loadFactor__I());
    $$this.table$und$eq__ALscala_collection_mutable_HashEntry__V(c.table__ALscala_collection_mutable_HashEntry());
    $$this.tableSize$und$eq__I__V(c.tableSize__I());
    $$this.threshold$und$eq__I__V(c.threshold__I());
    $$this.seedvalue$und$eq__I__V(c.seedvalue__I());
    $$this.sizemap$und$eq__AI__V(c.sizemap__AI())
  };
  if (($$this.alwaysInitSizeMap__Z() && ($$this.sizemap__AI() === null))) {
    $$this.sizeMapInitAndRebuild__V()
  }
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__hashTableContents__Lscala_collection_mutable_HashTable__Lscala_collection_mutable_HashTable$Contents = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_HashTable$Contents().init___I__ALscala_collection_mutable_HashEntry__I__I__I__AI($$this.$$undloadFactor__I(), $$this.table__ALscala_collection_mutable_HashEntry(), $$this.tableSize__I(), $$this.threshold__I(), $$this.seedvalue__I(), $$this.sizemap__AI())
});
ScalaJS.impls.scala_collection_mutable_HashTable$class__$init$__Lscala_collection_mutable_HashTable__V = (function($$this) {
  $$this.$$undloadFactor$und$eq__I__V(ScalaJS.modules.scala_collection_mutable_HashTable().defaultLoadFactor__I());
  $$this.table$und$eq__ALscala_collection_mutable_HashEntry__V(ScalaJS.newArrayObject(ScalaJS.data.scala_collection_mutable_HashEntry.getArrayOf(), [ScalaJS.impls.scala_collection_mutable_HashTable$class__initialCapacity__Lscala_collection_mutable_HashTable__I($$this)]));
  $$this.tableSize$und$eq__I__V(0);
  $$this.threshold$und$eq__I__V(ScalaJS.impls.scala_collection_mutable_HashTable$class__initialThreshold__Lscala_collection_mutable_HashTable__I__I($$this, $$this.$$undloadFactor__I()));
  $$this.sizemap$und$eq__AI__V(null);
  $$this.seedvalue$und$eq__I__V($$this.tableSizeSeed__I())
});
//@ sourceMappingURL=HashTable$class.js.map
