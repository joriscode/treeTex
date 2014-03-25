/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlack$Tree = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlack$Tree;
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.update__O__O__Lscala_collection_immutable_RedBlack$Tree = (function(k, v) {
  return this.scala$collection$immutable$RedBlack$Tree$$$outer__Lscala_collection_immutable_RedBlack().scala$collection$immutable$RedBlack$$blacken__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.upd__O__O__Lscala_collection_immutable_RedBlack$Tree(k, v))
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.$delete__O__Lscala_collection_immutable_RedBlack$Tree = (function(k) {
  return this.scala$collection$immutable$RedBlack$Tree$$$outer__Lscala_collection_immutable_RedBlack().scala$collection$immutable$RedBlack$$blacken__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.del__O__Lscala_collection_immutable_RedBlack$Tree(k))
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.range__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree = (function(from, until) {
  return this.scala$collection$immutable$RedBlack$Tree$$$outer__Lscala_collection_immutable_RedBlack().scala$collection$immutable$RedBlack$$blacken__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree(from, until))
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.scala$collection$immutable$RedBlack$Tree$$$outer__Lscala_collection_immutable_RedBlack = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.init___Lscala_collection_immutable_RedBlack = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.scala$collection$immutable$RedBlack$Tree$$$outer__ = (function() {
  return this.scala$collection$immutable$RedBlack$Tree$$$outer__Lscala_collection_immutable_RedBlack()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.range__Lscala_Option__Lscala_Option__ = (function(from, until) {
  return this.range__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree(from, until)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.$delete__O__ = (function(k) {
  return this.$delete__O__Lscala_collection_immutable_RedBlack$Tree(k)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.update__O__O__ = (function(k$2, v) {
  return this.update__O__O__Lscala_collection_immutable_RedBlack$Tree(k$2, v)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.count__ = (function() {
  return ScalaJS.bI(this.count__I())
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.last__ = (function() {
  return this.last__O()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.first__ = (function() {
  return this.first__O()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.rng__Lscala_Option__Lscala_Option__ = (function(from$2, until$2) {
  return this.rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree(from$2, until$2)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.smallest__ = (function() {
  return this.smallest__Lscala_collection_immutable_RedBlack$NonEmpty()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.del__O__ = (function(k$3) {
  return this.del__O__Lscala_collection_immutable_RedBlack$Tree(k$3)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.upd__O__O__ = (function(k$4, v$2) {
  return this.upd__O__O__Lscala_collection_immutable_RedBlack$Tree(k$4, v$2)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.toStream__ = (function() {
  return this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.foreach__Lscala_Function2__ = (function(f) {
  return ScalaJS.bV(this.foreach__Lscala_Function2__V(f))
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.lookup__O__ = (function(x) {
  return this.lookup__O__Lscala_collection_immutable_RedBlack$Tree(x)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.isBlack__ = (function() {
  return ScalaJS.bZ(this.isBlack__Z())
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlack$Tree = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlack$Tree.prototype = ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype;
ScalaJS.is.scala_collection_immutable_RedBlack$Tree = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlack$Tree)))
});
ScalaJS.as.scala_collection_immutable_RedBlack$Tree = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlack$Tree(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlack$Tree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$Tree = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlack$Tree)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlack$Tree = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$Tree(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlack$Tree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlack$Tree = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlack$Tree: 0
}, false, "scala.collection.immutable.RedBlack$Tree", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_RedBlack$Tree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlack$Tree;
//@ sourceMappingURL=RedBlack$Tree.js.map
