/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$13 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.cur$2 = null;
  this.$$outer$2 = null;
  this.f$4$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$13.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$13.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$13;
ScalaJS.c.scala_collection_Iterator$$anon$13.prototype.cur__p2__Lscala_collection_Iterator = (function() {
  return this.cur$2
});
ScalaJS.c.scala_collection_Iterator$$anon$13.prototype.cur$und$eq__p2__Lscala_collection_Iterator__V = (function(x$1) {
  this.cur$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$13.prototype.hasNext__Z = (function() {
  var _$this = this;
  tailCallLoop: while (true) {
    if (_$this.cur__p2__Lscala_collection_Iterator().hasNext__Z()) {
      return true
    } else {
      if (_$this.$$outer$2.hasNext__Z()) {
        _$this.cur$und$eq__p2__Lscala_collection_Iterator__V(ScalaJS.as.scala_collection_GenTraversableOnce(_$this.f$4$2.apply__O__O(_$this.$$outer$2.next__O())).toIterator__Lscala_collection_Iterator());
        continue tailCallLoop
      } else {
        return false
      }
    }
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$13.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var jsx$1 = this.cur__p2__Lscala_collection_Iterator()
  } else {
    var jsx$1 = ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
  };
  return jsx$1.next__O()
});
ScalaJS.c.scala_collection_Iterator$$anon$13.prototype.init___Lscala_collection_Iterator__Lscala_Function1 = (function($$outer, f$4) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.f$4$2 = f$4;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.cur$2 = ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$13 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$13.prototype = ScalaJS.c.scala_collection_Iterator$$anon$13.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$13 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$13)))
});
ScalaJS.as.scala_collection_Iterator$$anon$13 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$13(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$13")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$13 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$13)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$13 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$13(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$13;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$13 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$13: 0
}, false, "scala.collection.Iterator$$anon$13", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$13: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$13.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$13;
//@ sourceMappingURL=Iterator$$anon$13.js.map
