/** @constructor */
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.c$2 = 0;
  this.cmax$2 = 0;
  this.x$2$2 = null
});
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype.constructor = ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1;
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype.c__p2__I = (function() {
  return this.c$2
});
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype.c$und$eq__p2__I__V = (function(x$1) {
  this.c$2 = x$1
});
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype.cmax__p2__I = (function() {
  return this.cmax$2
});
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.c__p2__I() < this.cmax__p2__I())
});
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = this.x$2$2.productElement__I__O(this.c__p2__I());
  this.c$und$eq__p2__I__V((this.c__p2__I() + 1));
  return result
});
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype.init___Lscala_Product = (function(x$2) {
  this.x$2$2 = x$2;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.c$2 = 0;
  this.cmax$2 = x$2.productArity__I();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ScalaRunTime$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ScalaRunTime$$anon$1.prototype = ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype;
ScalaJS.is.scala_runtime_ScalaRunTime$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ScalaRunTime$$anon$1)))
});
ScalaJS.as.scala_runtime_ScalaRunTime$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ScalaRunTime$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ScalaRunTime$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_runtime_ScalaRunTime$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ScalaRunTime$$anon$1)))
});
ScalaJS.asArrayOf.scala_runtime_ScalaRunTime$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ScalaRunTime$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ScalaRunTime$$anon$1;", depth)
  }
});
ScalaJS.data.scala_runtime_ScalaRunTime$$anon$1 = new ScalaJS.ClassTypeData({
  scala_runtime_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_runtime_ScalaRunTime$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1.prototype.$classData = ScalaJS.data.scala_runtime_ScalaRunTime$$anon$1;
//@ sourceMappingURL=ScalaRunTime$$anon$1.js.map
