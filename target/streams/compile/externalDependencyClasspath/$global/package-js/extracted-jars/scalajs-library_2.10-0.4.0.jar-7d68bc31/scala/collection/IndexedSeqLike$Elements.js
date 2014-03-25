/** @constructor */
ScalaJS.c.scala_collection_IndexedSeqLike$Elements = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.start$2 = 0;
  this.end$2 = 0;
  this.index$2 = 0;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.constructor = ScalaJS.c.scala_collection_IndexedSeqLike$Elements;
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.buffered__Lscala_collection_BufferedIterator = (function() {
  return ScalaJS.impls.scala_collection_BufferedIterator$class__buffered__Lscala_collection_BufferedIterator__Lscala_collection_BufferedIterator(this)
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.initialSize__p2__I = (function() {
  if ((this.end$2 <= this.start$2)) {
    return 0
  } else {
    return (this.end$2 - this.start$2)
  }
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.index__p2__I = (function() {
  return this.index$2
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.index$und$eq__p2__I__V = (function(x$1) {
  this.index$2 = x$1
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.available__p2__I = (function() {
  return ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I((this.end$2 - this.index__p2__I())), 0)
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.hasNext__Z = (function() {
  return (this.index__p2__I() < this.end$2)
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.next__O = (function() {
  if ((this.index__p2__I() >= this.end$2)) {
    ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  var x = this.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike().apply__I__O(this.index__p2__I());
  this.index$und$eq__p2__I__V((this.index__p2__I() + 1));
  return x
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.head__O = (function() {
  if ((this.index__p2__I() >= this.end$2)) {
    ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return this.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike().apply__I__O(this.index__p2__I())
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.drop__I__Lscala_collection_Iterator = (function(n) {
  if ((n <= 0)) {
    return new ScalaJS.c.scala_collection_IndexedSeqLike$Elements().init___Lscala_collection_IndexedSeqLike__I__I(this.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike(), this.index__p2__I(), this.end$2)
  } else {
    if (((this.index__p2__I() + n) >= this.end$2)) {
      return new ScalaJS.c.scala_collection_IndexedSeqLike$Elements().init___Lscala_collection_IndexedSeqLike__I__I(this.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike(), this.end$2, this.end$2)
    } else {
      return new ScalaJS.c.scala_collection_IndexedSeqLike$Elements().init___Lscala_collection_IndexedSeqLike__I__I(this.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike(), (this.index__p2__I() + n), this.end$2)
    }
  }
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.take__I__Lscala_collection_Iterator = (function(n) {
  if ((n <= 0)) {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
  } else {
    if ((n <= this.available__p2__I())) {
      return new ScalaJS.c.scala_collection_IndexedSeqLike$Elements().init___Lscala_collection_IndexedSeqLike__I__I(this.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike(), this.index__p2__I(), (this.index__p2__I() + n))
    } else {
      return new ScalaJS.c.scala_collection_IndexedSeqLike$Elements().init___Lscala_collection_IndexedSeqLike__I__I(this.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike(), this.index__p2__I(), this.end$2)
    }
  }
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.slice__I__I__Lscala_collection_Iterator = (function(from, until) {
  return this.take__I__Lscala_collection_Iterator(until).drop__I__Lscala_collection_Iterator(from)
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.init___Lscala_collection_IndexedSeqLike__I__I = (function($$outer, start, end) {
  this.start$2 = start;
  this.end$2 = end;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_BufferedIterator$class__$init$__Lscala_collection_BufferedIterator__V(this);
  this.index$2 = start;
  return this
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.scala$collection$IndexedSeqLike$Elements$$$outer__ = (function() {
  return this.scala$collection$IndexedSeqLike$Elements$$$outer__Lscala_collection_IndexedSeqLike()
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.head__ = (function() {
  return this.head__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_IndexedSeqLike$Elements = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_IndexedSeqLike$Elements.prototype = ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype;
ScalaJS.is.scala_collection_IndexedSeqLike$Elements = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IndexedSeqLike$Elements)))
});
ScalaJS.as.scala_collection_IndexedSeqLike$Elements = (function(obj) {
  if ((ScalaJS.is.scala_collection_IndexedSeqLike$Elements(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IndexedSeqLike$Elements")
  }
});
ScalaJS.isArrayOf.scala_collection_IndexedSeqLike$Elements = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IndexedSeqLike$Elements)))
});
ScalaJS.asArrayOf.scala_collection_IndexedSeqLike$Elements = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IndexedSeqLike$Elements(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IndexedSeqLike$Elements;", depth)
  }
});
ScalaJS.data.scala_collection_IndexedSeqLike$Elements = new ScalaJS.ClassTypeData({
  scala_collection_IndexedSeqLike$Elements: 0
}, false, "scala.collection.IndexedSeqLike$Elements", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_IndexedSeqLike$Elements: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_BufferedIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_IndexedSeqLike$Elements.prototype.$classData = ScalaJS.data.scala_collection_IndexedSeqLike$Elements;
//@ sourceMappingURL=IndexedSeqLike$Elements.js.map
