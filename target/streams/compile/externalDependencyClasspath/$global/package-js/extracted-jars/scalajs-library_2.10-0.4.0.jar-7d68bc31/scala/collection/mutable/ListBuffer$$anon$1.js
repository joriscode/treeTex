/** @constructor */
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.cursor$2 = null;
  this.delivered$2 = 0;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1;
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.cursor__p2__Lscala_collection_immutable_List = (function() {
  return this.cursor$2
});
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.cursor$und$eq__p2__Lscala_collection_immutable_List__V = (function(x$1) {
  this.cursor$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.delivered__p2__I = (function() {
  return this.delivered$2
});
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.delivered$und$eq__p2__I__V = (function(x$1) {
  this.delivered$2 = x$1
});
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.hasNext__Z = (function() {
  return (this.delivered__p2__I() < this.$$outer$2.length__I())
});
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("next on empty Iterator")
  } else {
    if ((this.cursor__p2__Lscala_collection_immutable_List() === null)) {
      this.cursor$und$eq__p2__Lscala_collection_immutable_List__V(this.$$outer$2.scala$collection$mutable$ListBuffer$$start__Lscala_collection_immutable_List())
    } else {
      this.cursor$und$eq__p2__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.cursor__p2__Lscala_collection_immutable_List().tail__O()))
    };
    this.delivered$und$eq__p2__I__V((this.delivered__p2__I() + 1));
    return this.cursor__p2__Lscala_collection_immutable_List().head__O()
  }
});
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.init___Lscala_collection_mutable_ListBuffer = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.cursor$2 = null;
  this.delivered$2 = 0;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ListBuffer$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ListBuffer$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_ListBuffer$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ListBuffer$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_ListBuffer$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ListBuffer$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ListBuffer$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ListBuffer$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ListBuffer$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ListBuffer$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ListBuffer$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ListBuffer$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ListBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ListBuffer$$anon$1", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_mutable_ListBuffer$$anon$1: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ListBuffer$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_ListBuffer$$anon$1;
//@ sourceMappingURL=ListBuffer$$anon$1.js.map
