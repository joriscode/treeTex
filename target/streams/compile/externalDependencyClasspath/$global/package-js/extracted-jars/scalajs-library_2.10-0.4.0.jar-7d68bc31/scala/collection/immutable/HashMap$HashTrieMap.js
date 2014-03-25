/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap = (function() {
  ScalaJS.c.scala_collection_immutable_HashMap.call(this);
  this.bitmap$6 = 0;
  this.elems$6 = null;
  this.size0$6 = 0
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashMap();
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap;
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.bitmap__I = (function() {
  return this.bitmap$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.elems__ALscala_collection_immutable_HashMap = (function() {
  return this.elems$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.size0__I = (function() {
  return this.size0$6
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.size__I = (function() {
  return this.size0__I()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.get0__O__I__I__Lscala_Option = (function(key, hash, level) {
  var index = ((hash >>> level) & 31);
  var mask = (1 << index);
  if ((this.bitmap__I() === -1)) {
    return this.elems__ALscala_collection_immutable_HashMap().underlying[(index & 31)].get0__O__I__I__Lscala_Option(key, hash, (level + 5))
  } else {
    if (((this.bitmap__I() & mask) !== 0)) {
      var offset = ScalaJS.modules.java_lang_Integer().bitCount__I__I((this.bitmap__I() & (mask - 1)));
      return this.elems__ALscala_collection_immutable_HashMap().underlying[offset].get0__O__I__I__Lscala_Option(key, hash, (level + 5))
    } else {
      return ScalaJS.modules.scala_None()
    }
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap = (function(key, hash, level, value, kv, merger) {
  var index = ((hash >>> level) & 31);
  var mask = (1 << index);
  var offset = ScalaJS.modules.java_lang_Integer().bitCount__I__I((this.bitmap__I() & (mask - 1)));
  if (((this.bitmap__I() & mask) !== 0)) {
    var sub = this.elems__ALscala_collection_immutable_HashMap().underlying[offset];
    var subNew = sub.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(key, hash, (level + 5), value, kv, merger);
    if ((subNew === sub)) {
      return this
    } else {
      var elemsNew = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashMap.getArrayOf(), [this.elems__ALscala_collection_immutable_HashMap().underlying.length]);
      ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashMap(), 0, elemsNew, 0, this.elems__ALscala_collection_immutable_HashMap().underlying.length);
      elemsNew.underlying[offset] = subNew;
      return new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I(this.bitmap__I(), elemsNew, (this.size__I() + (subNew.size__I() - sub.size__I())))
    }
  } else {
    var elemsNew$2 = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashMap.getArrayOf(), [(this.elems__ALscala_collection_immutable_HashMap().underlying.length + 1)]);
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashMap(), 0, elemsNew$2, 0, offset);
    elemsNew$2.underlying[offset] = new ScalaJS.c.scala_collection_immutable_HashMap$HashMap1().init___O__I__O__Lscala_Tuple2(key, hash, value, kv);
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashMap(), offset, elemsNew$2, (offset + 1), (this.elems__ALscala_collection_immutable_HashMap().underlying.length - offset));
    return new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I((this.bitmap__I() | mask), elemsNew$2, (this.size__I() + 1))
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.removed0__O__I__I__Lscala_collection_immutable_HashMap = (function(key, hash, level) {
  var index = ((hash >>> level) & 31);
  var mask = (1 << index);
  var offset = ScalaJS.modules.java_lang_Integer().bitCount__I__I((this.bitmap__I() & (mask - 1)));
  if (((this.bitmap__I() & mask) !== 0)) {
    var sub = this.elems__ALscala_collection_immutable_HashMap().underlying[offset];
    var subNew = sub.removed0__O__I__I__Lscala_collection_immutable_HashMap(key, hash, (level + 5));
    if ((subNew === sub)) {
      return this
    } else {
      if (subNew.isEmpty__Z()) {
        var bitmapNew = (this.bitmap__I() ^ mask);
        if ((bitmapNew !== 0)) {
          var elemsNew = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashMap.getArrayOf(), [(this.elems__ALscala_collection_immutable_HashMap().underlying.length - 1)]);
          ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashMap(), 0, elemsNew, 0, offset);
          ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashMap(), (offset + 1), elemsNew, offset, ((this.elems__ALscala_collection_immutable_HashMap().underlying.length - offset) - 1));
          var sizeNew = (this.size__I() - sub.size__I());
          if (((elemsNew.underlying.length === 1) && (!ScalaJS.is.scala_collection_immutable_HashMap$HashTrieMap(elemsNew.underlying[0])))) {
            return elemsNew.underlying[0]
          } else {
            return new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I(bitmapNew, elemsNew, sizeNew)
          }
        } else {
          return ScalaJS.modules.scala_collection_immutable_HashMap().empty__Lscala_collection_immutable_HashMap()
        }
      } else {
        if (((this.elems__ALscala_collection_immutable_HashMap().underlying.length === 1) && (!ScalaJS.is.scala_collection_immutable_HashMap$HashTrieMap(subNew)))) {
          return subNew
        } else {
          var elemsNew$2 = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashMap.getArrayOf(), [this.elems__ALscala_collection_immutable_HashMap().underlying.length]);
          ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashMap(), 0, elemsNew$2, 0, this.elems__ALscala_collection_immutable_HashMap().underlying.length);
          elemsNew$2.underlying[offset] = subNew;
          var sizeNew$2 = (this.size__I() + (subNew.size__I() - sub.size__I()));
          return new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I(this.bitmap__I(), elemsNew$2, sizeNew$2)
        }
      }
    }
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap$$anon$1().init___Lscala_collection_immutable_HashMap$HashTrieMap(this)
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.foreach__Lscala_Function1__V = (function(f) {
  var i = 0;
  while ((i < this.elems__ALscala_collection_immutable_HashMap().underlying.length)) {
    this.elems__ALscala_collection_immutable_HashMap().underlying[i].foreach__Lscala_Function1__V(f);
    i = (i + 1)
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.posOf__p6__I__I__I = (function(n, bm) {
  var left = n;
  var i = -1;
  var b = bm;
  while ((left >= 0)) {
    i = (i + 1);
    if (((b & 1) !== 0)) {
      left = (left - 1)
    };
    b = (b >>> 1)
  };
  return i
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.split__Lscala_collection_immutable_Seq = (function() {
  if ((this.size__I() === 1)) {
    return ScalaJS.as.scala_collection_immutable_Seq(ScalaJS.modules.scala_collection_immutable_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_HashMap$HashTrieMap.getArrayOf(), [this]), 1))))
  } else {
    var nodesize = ScalaJS.modules.java_lang_Integer().bitCount__I__I(this.bitmap__I());
    if ((nodesize > 1)) {
      var splitpoint = ((nodesize / 2) | 0);
      var bitsplitpoint = this.posOf__p6__I__I__I(((nodesize / 2) | 0), this.bitmap__I());
      var bm1 = (this.bitmap__I() & (-1 << bitsplitpoint));
      var bm2 = (this.bitmap__I() & (-1 >>> (32 - bitsplitpoint)));
      var x1 = ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.elems__ALscala_collection_immutable_HashMap(), 1)).splitAt__I__Lscala_Tuple2(splitpoint);
      matchEnd3: {
        if ((x1 !== null)) {
          var e1 = ScalaJS.asArrayOf.scala_collection_immutable_HashMap(x1.$$und1__O(), 1);
          var e2 = ScalaJS.asArrayOf.scala_collection_immutable_HashMap(x1.$$und2__O(), 1);
          var x$2 = new ScalaJS.c.scala_Tuple2().init___O__O(e1, e2);
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      var e1$2 = ScalaJS.asArrayOf.scala_collection_immutable_HashMap(x$2.$$und1__O(), 1);
      var e2$2 = ScalaJS.asArrayOf.scala_collection_immutable_HashMap(x$2.$$und2__O(), 1);
      var hm1 = new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I(bm1, e1$2, ScalaJS.uI(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(e1$2, 1)).foldLeft__O__Lscala_Function2__O(ScalaJS.bI(0), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
        return (function(x$3, x$4) {
          x$3 = ScalaJS.uI(x$3);
          return ScalaJS.bI((x$3 + x$4.size__I()))
        })
      })()))));
      var hm2 = new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I(bm2, e2$2, ScalaJS.uI(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(e2$2, 1)).foldLeft__O__Lscala_Function2__O(ScalaJS.bI(0), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
        return (function(x$5, x$6) {
          x$5 = ScalaJS.uI(x$5);
          return ScalaJS.bI((x$5 + x$6.size__I()))
        })
      })()))));
      return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_HashMap$HashTrieMap.getArrayOf(), [hm1, hm2]), 1)))
    } else {
      return this.elems__ALscala_collection_immutable_HashMap().underlying[0].split__Lscala_collection_immutable_Seq()
    }
  }
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap = (function(that, level, merger) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_immutable_HashMap$HashMap1(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_HashMap$HashMap1(x1);
    return this.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(x2.key__O(), x2.hash__I(), level, x2.value__O(), x2.kv__Lscala_Tuple2(), merger)
  };
  if (ScalaJS.is.scala_collection_immutable_HashMap$HashTrieMap(x1)) {
    var x3 = ScalaJS.as.scala_collection_immutable_HashMap$HashTrieMap(x1);
    var that$2 = x3;
    var thiselems = this.elems__ALscala_collection_immutable_HashMap();
    var thatelems = that$2.elems__ALscala_collection_immutable_HashMap();
    var thisbm = this.bitmap__I();
    var thatbm = that$2.bitmap__I();
    var subcount = ScalaJS.modules.java_lang_Integer().bitCount__I__I((thisbm | thatbm));
    var merged = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashMap.getArrayOf(), [subcount]);
    var i = 0;
    var thisi = 0;
    var thati = 0;
    var totalelems = 0;
    while ((i < subcount)) {
      var thislsb = (thisbm ^ (thisbm & (thisbm - 1)));
      var thatlsb = (thatbm ^ (thatbm & (thatbm - 1)));
      if ((thislsb === thatlsb)) {
        var m = thiselems.underlying[thisi].merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(thatelems.underlying[thati], (level + 5), merger);
        totalelems = (totalelems + m.size__I());
        merged.underlying[i] = m;
        thisbm = (thisbm & (~thislsb));
        thatbm = (thatbm & (~thatlsb));
        thati = (thati + 1);
        thisi = (thisi + 1)
      } else {
        var a = (thislsb - 1);
        var b = (thatlsb - 1);
        if (ScalaJS.modules.scala_collection_immutable_HashMap().unsignedCompare__I__I__Z((thislsb - 1), (thatlsb - 1))) {
          var m$2 = thiselems.underlying[thisi];
          totalelems = (totalelems + m$2.size__I());
          merged.underlying[i] = m$2;
          thisbm = (thisbm & (~thislsb));
          thisi = (thisi + 1)
        } else {
          var m$3 = thatelems.underlying[thati];
          totalelems = (totalelems + m$3.size__I());
          merged.underlying[i] = m$3;
          thatbm = (thatbm & (~thatlsb));
          thati = (thati + 1)
        }
      };
      i = (i + 1)
    };
    return new ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap().init___I__ALscala_collection_immutable_HashMap__I((this.bitmap__I() | that$2.bitmap__I()), merged, totalelems)
  };
  if (ScalaJS.is.scala_collection_immutable_HashMap$HashMapCollision1(x1)) {
    return that.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(this, level, merger.invert__Lscala_collection_immutable_HashMap$Merger())
  };
  if (ScalaJS.is.scala_collection_immutable_HashMap(x1)) {
    return this
  };
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("section supposed to be unreachable.")
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.init___I__ALscala_collection_immutable_HashMap__I = (function(bitmap, elems, size0) {
  this.bitmap$6 = bitmap;
  this.elems$6 = elems;
  this.size0$6 = size0;
  ScalaJS.c.scala_collection_immutable_HashMap.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.size0__ = (function() {
  return ScalaJS.bI(this.size0__I())
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.elems__ = (function() {
  return this.elems__ALscala_collection_immutable_HashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.bitmap__ = (function() {
  return ScalaJS.bI(this.bitmap__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap$HashTrieMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap$HashTrieMap.prototype = ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype;
ScalaJS.is.scala_collection_immutable_HashMap$HashTrieMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap$HashTrieMap)))
});
ScalaJS.as.scala_collection_immutable_HashMap$HashTrieMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap$HashTrieMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap$HashTrieMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap$HashTrieMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap$HashTrieMap)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap$HashTrieMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap$HashTrieMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashTrieMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap$HashTrieMap = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap$HashTrieMap: 0
}, false, "scala.collection.immutable.HashMap$HashTrieMap", ScalaJS.data.scala_collection_immutable_HashMap, {
  scala_collection_immutable_HashMap$HashTrieMap: 1,
  scala_collection_immutable_HashMap: 1,
  scala_collection_CustomParallelizable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_AbstractMap: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
ScalaJS.c.scala_collection_immutable_HashMap$HashTrieMap.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap$HashTrieMap;
//@ sourceMappingURL=HashMap$HashTrieMap.js.map
