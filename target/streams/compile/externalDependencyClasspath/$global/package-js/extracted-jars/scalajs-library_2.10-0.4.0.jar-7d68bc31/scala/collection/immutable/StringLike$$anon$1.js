/** @constructor */
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.str$2 = null;
  this.len$2 = 0;
  this.index$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_immutable_StringLike$$anon$1;
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.str__p2__T = (function() {
  return this.str$2
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.len__p2__I = (function() {
  return this.len$2
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.index__p2__I = (function() {
  return this.index$2
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.index$und$eq__p2__I__V = (function(x$1) {
  this.index$2 = x$1
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.hasNext__Z = (function() {
  return (this.index__p2__I() < this.len__p2__I())
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.next__T = (function() {
  if ((this.index__p2__I() >= this.len__p2__I())) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("next on empty iterator")
  };
  var start = this.index__p2__I();
  while (((this.index__p2__I() < this.len__p2__I()) && (!ScalaJS.impls.scala_collection_immutable_StringLike$class__scala$collection$immutable$StringLike$$isLineBreak__Lscala_collection_immutable_StringLike__C__Z(this.$$outer$2, this.$$outer$2.apply__I__C(this.index__p2__I()))))) {
    this.index$und$eq__p2__I__V((this.index__p2__I() + 1))
  };
  this.index$und$eq__p2__I__V((this.index__p2__I() + 1));
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(this.str__p2__T(), start, ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(this.index__p2__I()), this.len__p2__I()))
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.next__O = (function() {
  return this.next__T()
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.init___Lscala_collection_immutable_StringLike = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.str$2 = $$outer.toString__T();
  this.len$2 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.str__p2__T());
  this.index$2 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_StringLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_StringLike$$anon$1.prototype = ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype;
ScalaJS.is.scala_collection_immutable_StringLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_StringLike$$anon$1)))
});
ScalaJS.as.scala_collection_immutable_StringLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_StringLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.StringLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_StringLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_StringLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_StringLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_StringLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.StringLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_StringLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_StringLike$$anon$1: 0
}, false, "scala.collection.immutable.StringLike$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_immutable_StringLike$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_StringLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_immutable_StringLike$$anon$1;
//@ sourceMappingURL=StringLike$$anon$1.js.map
