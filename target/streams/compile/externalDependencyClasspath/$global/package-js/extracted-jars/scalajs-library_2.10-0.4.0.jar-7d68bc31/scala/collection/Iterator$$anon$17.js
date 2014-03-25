/** @constructor */
ScalaJS.c.scala_collection_Iterator$$anon$17 = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.hd$2 = null;
  this.hdDefined$2 = false;
  this.tail$2 = null;
  this.p$3$2 = null
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.constructor = ScalaJS.c.scala_collection_Iterator$$anon$17;
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.hd__p2__O = (function() {
  return this.hd$2
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.hd$und$eq__p2__O__V = (function(x$1) {
  this.hd$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.hdDefined__p2__Z = (function() {
  return this.hdDefined$2
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.hdDefined$und$eq__p2__Z__V = (function(x$1) {
  this.hdDefined$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.tail__p2__Lscala_collection_Iterator = (function() {
  return this.tail$2
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.tail$und$eq__p2__Lscala_collection_Iterator__V = (function(x$1) {
  this.tail$2 = x$1
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.hasNext__Z = (function() {
  if (this.hdDefined__p2__Z()) {
    return true
  } else {
    if (this.tail__p2__Lscala_collection_Iterator().hasNext__Z()) {
      this.hd$und$eq__p2__O__V(this.tail__p2__Lscala_collection_Iterator().next__O());
      if (ScalaJS.uZ(this.p$3$2.apply__O__O(this.hd__p2__O()))) {
        this.hdDefined$und$eq__p2__Z__V(true)
      } else {
        this.tail$und$eq__p2__Lscala_collection_Iterator__V(ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator())
      };
      return this.hdDefined__p2__Z()
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.hdDefined$und$eq__p2__Z__V(false);
    return this.hd__p2__O()
  } else {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  }
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.init___Lscala_collection_Iterator__Lscala_Function1 = (function($$outer, p$3) {
  this.p$3$2 = p$3;
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  this.hdDefined$2 = false;
  this.tail$2 = $$outer;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Iterator$$anon$17 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Iterator$$anon$17.prototype = ScalaJS.c.scala_collection_Iterator$$anon$17.prototype;
ScalaJS.is.scala_collection_Iterator$$anon$17 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator$$anon$17)))
});
ScalaJS.as.scala_collection_Iterator$$anon$17 = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator$$anon$17(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator$$anon$17")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator$$anon$17 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator$$anon$17)))
});
ScalaJS.asArrayOf.scala_collection_Iterator$$anon$17 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator$$anon$17(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator$$anon$17;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator$$anon$17 = new ScalaJS.ClassTypeData({
  scala_collection_Iterator$$anon$17: 0
}, false, "scala.collection.Iterator$$anon$17", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_Iterator$$anon$17: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_Iterator$$anon$17.prototype.$classData = ScalaJS.data.scala_collection_Iterator$$anon$17;
//@ sourceMappingURL=Iterator$$anon$17.js.map
