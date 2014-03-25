/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$12 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.cur$2 = null;
  this.selfExhausted$2 = false;
  this.it$2 = null;
  this.that$1$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$12;
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.it$lzycompute__p2__Lscala_collection_Iterator = (function() {
  if ((!this.bitmap$0$2)) {
    this.it$2 = ScalaJS.as.scala_collection_GenTraversableOnce(this.that$1$2.apply__O()).toIterator__Lscala_collection_Iterator();
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  this.that$1$2 = null;
  return this.it$2
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.cur__p2__Lscala_collection_Iterator = (function() {
  return this.cur$2
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.cur$und$eq__p2__Lscala_collection_Iterator__V = (function(x$1) {
  this.cur$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.selfExhausted__p2__Z = (function() {
  return this.selfExhausted$2
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.selfExhausted$und$eq__p2__Z__V = (function(x$1) {
  this.selfExhausted$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.it__p2__Lscala_collection_Iterator = (function() {
  if ((!this.bitmap$0$2)) {
    return this.it$lzycompute__p2__Lscala_collection_Iterator()
  } else {
    return this.it$2
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.hasNext__Z = (function() {
  if (this.cur__p2__Lscala_collection_Iterator().hasNext__Z()) {
    return true
  } else {
    if ((!this.selfExhausted__p2__Z())) {
      if (this.it__p2__Lscala_collection_Iterator().hasNext__Z()) {
        this.cur$und$eq__p2__Lscala_collection_Iterator__V(this.it__p2__Lscala_collection_Iterator());
        this.selfExhausted$und$eq__p2__Z__V(true);
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.next__O = (function() {
  this.hasNext__Z();
  return this.cur__p2__Lscala_collection_Iterator().next__O()
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.init___Lscala_collection_Iterator__Lscala_Function0 = (function($$outer, that$1) {
  this.that$1$2 = that$1;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.cur$2 = $$outer;
  this.selfExhausted$2 = false;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$12 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$12.prototype = ScalaJS.c.scala_collection_Iterator$$anon$12.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$12 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$12)))
});
ScalaJS.as.scala_collection_Iterator$$anon$12 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$12(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$12")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$12 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$12)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$12 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$12(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$12;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$12 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$12: 0
}, false, "scala.collection.Iterator$$anon$12", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$12: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$12.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$12;
//@ sourceMappingURL=Iterator$$anon$12.js.map
