/** @constructor */
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet = (function() {
  ScalaJS.c.scala_collection_immutable_HashSet.call(this);
  this.bitmap$5 = 0;
  this.elems$5 = null;
  this.size0$5 = 0
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype = new ScalaJS.inheritable.scala_collection_immutable_HashSet();
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet;
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.bitmap__p5__I = (function() {
  return this.bitmap$5
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.elems__ALscala_collection_immutable_HashSet = (function() {
  return this.elems$5
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.size0__p5__I = (function() {
  return this.size0$5
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.size__I = (function() {
  return this.size0__p5__I()
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  var index = ((hash >>> level) & 31);
  var mask = (1 << index);
  if ((this.bitmap__p5__I() === -1)) {
    return this.elems__ALscala_collection_immutable_HashSet().underlying[(index & 31)].get0__O__I__I__Z(key, hash, (level + 5))
  } else {
    if (((this.bitmap__p5__I() & mask) !== 0)) {
      var offset = ScalaJS.modules.java_lang_Integer().bitCount__I__I((this.bitmap__p5__I() & (mask - 1)));
      return this.elems__ALscala_collection_immutable_HashSet().underlying[offset].get0__O__I__I__Z(key, hash, (level + 5))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.updated0__O__I__I__Lscala_collection_immutable_HashSet = (function(key, hash, level) {
  var index = ((hash >>> level) & 31);
  var mask = (1 << index);
  var offset = ScalaJS.modules.java_lang_Integer().bitCount__I__I((this.bitmap__p5__I() & (mask - 1)));
  if (((this.bitmap__p5__I() & mask) !== 0)) {
    var sub = this.elems__ALscala_collection_immutable_HashSet().underlying[offset];
    var subNew = sub.updated0__O__I__I__Lscala_collection_immutable_HashSet(key, hash, (level + 5));
    if ((sub === subNew)) {
      return this
    } else {
      var elemsNew = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashSet.getArrayOf(), [this.elems__ALscala_collection_immutable_HashSet().underlying.length]);
      ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashSet(), 0, elemsNew, 0, this.elems__ALscala_collection_immutable_HashSet().underlying.length);
      elemsNew.underlying[offset] = subNew;
      return new ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet().init___I__ALscala_collection_immutable_HashSet__I(this.bitmap__p5__I(), elemsNew, (this.size__I() + (subNew.size__I() - sub.size__I())))
    }
  } else {
    var elemsNew$2 = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashSet.getArrayOf(), [(this.elems__ALscala_collection_immutable_HashSet().underlying.length + 1)]);
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashSet(), 0, elemsNew$2, 0, offset);
    elemsNew$2.underlying[offset] = new ScalaJS.c.scala_collection_immutable_HashSet$HashSet1().init___O__I(key, hash);
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashSet(), offset, elemsNew$2, (offset + 1), (this.elems__ALscala_collection_immutable_HashSet().underlying.length - offset));
    var bitmapNew = (this.bitmap__p5__I() | mask);
    return new ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet().init___I__ALscala_collection_immutable_HashSet__I(bitmapNew, elemsNew$2, (this.size__I() + 1))
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.removed0__O__I__I__Lscala_collection_immutable_HashSet = (function(key, hash, level) {
  var index = ((hash >>> level) & 31);
  var mask = (1 << index);
  var offset = ScalaJS.modules.java_lang_Integer().bitCount__I__I((this.bitmap__p5__I() & (mask - 1)));
  if (((this.bitmap__p5__I() & mask) !== 0)) {
    var sub = this.elems__ALscala_collection_immutable_HashSet().underlying[offset];
    var subNew = sub.removed0__O__I__I__Lscala_collection_immutable_HashSet(key, hash, (level + 5));
    if ((sub === subNew)) {
      return this
    } else {
      if (subNew.isEmpty__Z()) {
        var bitmapNew = (this.bitmap__p5__I() ^ mask);
        if ((bitmapNew !== 0)) {
          var elemsNew = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashSet.getArrayOf(), [(this.elems__ALscala_collection_immutable_HashSet().underlying.length - 1)]);
          ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashSet(), 0, elemsNew, 0, offset);
          ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashSet(), (offset + 1), elemsNew, offset, ((this.elems__ALscala_collection_immutable_HashSet().underlying.length - offset) - 1));
          var sizeNew = (this.size__I() - sub.size__I());
          if (((elemsNew.underlying.length === 1) && (!ScalaJS.is.scala_collection_immutable_HashSet$HashTrieSet(elemsNew.underlying[0])))) {
            return elemsNew.underlying[0]
          } else {
            return new ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet().init___I__ALscala_collection_immutable_HashSet__I(bitmapNew, elemsNew, sizeNew)
          }
        } else {
          return ScalaJS.modules.scala_collection_immutable_HashSet().empty__Lscala_collection_immutable_HashSet()
        }
      } else {
        var elemsNew$2 = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_HashSet.getArrayOf(), [this.elems__ALscala_collection_immutable_HashSet().underlying.length]);
        ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__ALscala_collection_immutable_HashSet(), 0, elemsNew$2, 0, this.elems__ALscala_collection_immutable_HashSet().underlying.length);
        elemsNew$2.underlying[offset] = subNew;
        var sizeNew$2 = (this.size__I() + (subNew.size__I() - sub.size__I()));
        return new ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet().init___I__ALscala_collection_immutable_HashSet__I(this.bitmap__p5__I(), elemsNew$2, sizeNew$2)
      }
    }
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.iterator__Lscala_collection_immutable_TrieIterator = (function() {
  return new ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet$$anon$1().init___Lscala_collection_immutable_HashSet$HashTrieSet(this)
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.foreach__Lscala_Function1__V = (function(f) {
  var i = 0;
  while ((i < this.elems__ALscala_collection_immutable_HashSet().underlying.length)) {
    this.elems__ALscala_collection_immutable_HashSet().underlying[i].foreach__Lscala_Function1__V(f);
    i = (i + 1)
  }
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.iterator__Lscala_collection_immutable_TrieIterator()
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.init___I__ALscala_collection_immutable_HashSet__I = (function(bitmap, elems, size0) {
  this.bitmap$5 = bitmap;
  this.elems$5 = elems;
  this.size0$5 = size0;
  ScalaJS.c.scala_collection_immutable_HashSet.prototype.init___.call(this);
  ScalaJS.modules.scala_Predef().assert__Z__V((ScalaJS.modules.java_lang_Integer().bitCount__I__I(bitmap) === elems.underlying.length));
  return this
});
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.elems__ = (function() {
  return this.elems__ALscala_collection_immutable_HashSet()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashSet$HashTrieSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashSet$HashTrieSet.prototype = ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype;
ScalaJS.is.scala_collection_immutable_HashSet$HashTrieSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashSet$HashTrieSet)))
});
ScalaJS.as.scala_collection_immutable_HashSet$HashTrieSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashSet$HashTrieSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashSet$HashTrieSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashSet$HashTrieSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashSet$HashTrieSet)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashSet$HashTrieSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashSet$HashTrieSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashTrieSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashSet$HashTrieSet = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashSet$HashTrieSet: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet", ScalaJS.data.scala_collection_immutable_HashSet, {
  scala_collection_immutable_HashSet$HashTrieSet: 1,
  scala_collection_immutable_HashSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSet: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
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
ScalaJS.c.scala_collection_immutable_HashSet$HashTrieSet.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashSet$HashTrieSet;
//@ sourceMappingURL=HashSet$HashTrieSet.js.map
