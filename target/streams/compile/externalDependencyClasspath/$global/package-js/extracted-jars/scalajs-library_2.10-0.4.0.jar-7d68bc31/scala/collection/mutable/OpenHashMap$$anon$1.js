/** @constructor */
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.index$2 = 0;
  this.initialModCount$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1;
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.index__p2__I = (function() {
  return this.index$2
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.index$und$eq__p2__I__V = (function(x$1) {
  this.index$2 = x$1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.initialModCount__p2__I = (function() {
  return this.initialModCount$2
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.advance__p2__V = (function() {
  if ((this.initialModCount__p2__I() !== this.$$outer$2.scala$collection$mutable$OpenHashMap$$modCount$f)) {
    ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("Concurrent modification")
  };
  while (((this.index__p2__I() <= this.$$outer$2.scala$collection$mutable$OpenHashMap$$mask__I()) && (ScalaJS.anyRefEqEq(this.$$outer$2.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[this.index__p2__I()], null) || ScalaJS.anyRefEqEq(this.$$outer$2.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[this.index__p2__I()].value__Lscala_Option(), ScalaJS.modules.scala_None())))) {
    this.index$und$eq__p2__I__V((this.index__p2__I() + 1))
  }
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.hasNext__Z = (function() {
  this.advance__p2__V();
  return (this.index__p2__I() <= this.$$outer$2.scala$collection$mutable$OpenHashMap$$mask__I())
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.next__Lscala_Tuple2 = (function() {
  this.advance__p2__V();
  var result = this.$$outer$2.scala$collection$mutable$OpenHashMap$$table__ALscala_collection_mutable_OpenHashMap$OpenEntry().underlying[this.index__p2__I()];
  this.index$und$eq__p2__I__V((this.index__p2__I() + 1));
  return new ScalaJS.c.scala_Tuple2().init___O__O(result.key__O(), result.value__Lscala_Option().get__O())
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.next__O = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.init___Lscala_collection_mutable_OpenHashMap = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.index$2 = 0;
  this.initialModCount$2 = $$outer.scala$collection$mutable$OpenHashMap$$modCount$f;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_OpenHashMap$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_OpenHashMap$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_OpenHashMap$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_OpenHashMap$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_OpenHashMap$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_OpenHashMap$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.OpenHashMap$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_OpenHashMap$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_OpenHashMap$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_OpenHashMap$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_OpenHashMap$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.OpenHashMap$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_OpenHashMap$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_OpenHashMap$$anon$1: 0
}, false, "scala.collection.mutable.OpenHashMap$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_OpenHashMap$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_OpenHashMap$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_OpenHashMap$$anon$1;
//@ sourceMappingURL=OpenHashMap$$anon$1.js.map
