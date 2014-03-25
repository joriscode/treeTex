/** @constructor */
ScalaJS.c.scala_collection_immutable_StreamIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.these$2 = null
});
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_StreamIterator;
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.these__p2__Lscala_collection_immutable_StreamIterator$LazyCell = (function() {
  return this.these$2
});
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.these$und$eq__p2__Lscala_collection_immutable_StreamIterator$LazyCell__V = (function(x$1) {
  this.these$2 = x$1
});
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.hasNext__Z = (function() {
  return this.these__p2__Lscala_collection_immutable_StreamIterator$LazyCell().v__Lscala_collection_immutable_Stream().nonEmpty__Z()
});
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.next__O = (function() {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  } else {
    var cur = this.these__p2__Lscala_collection_immutable_StreamIterator$LazyCell().v__Lscala_collection_immutable_Stream();
    var result = cur.head__O();
    this.these$und$eq__p2__Lscala_collection_immutable_StreamIterator$LazyCell__V(new ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell().init___Lscala_collection_immutable_StreamIterator__Lscala_Function0(this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(cur$1) {
      return (function() {
        return ScalaJS.as.scala_collection_immutable_Stream(cur$1.tail__O())
      })
    })(cur))));
    return result
  }
});
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  var result = this.these__p2__Lscala_collection_immutable_StreamIterator$LazyCell().v__Lscala_collection_immutable_Stream();
  this.these$und$eq__p2__Lscala_collection_immutable_StreamIterator$LazyCell__V(new ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell().init___Lscala_collection_immutable_StreamIterator__Lscala_Function0(this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
    })
  })())));
  return result
});
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.toList__Lscala_collection_immutable_List = (function() {
  return this.toStream__Lscala_collection_immutable_Stream().toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.init___Lscala_collection_immutable_Stream = (function(self) {
  ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.init___.call(this);
  this.these$und$eq__p2__Lscala_collection_immutable_StreamIterator$LazyCell__V(new ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell().init___Lscala_collection_immutable_StreamIterator__Lscala_Function0(this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(self$1) {
    return (function() {
      return self$1
    })
  })(self))));
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_StreamIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_StreamIterator.prototype = ScalaJS.c.scala_collection_immutable_StreamIterator.prototype;
ScalaJS.is.scala_collection_immutable_StreamIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_StreamIterator)))
});
ScalaJS.as.scala_collection_immutable_StreamIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_StreamIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.StreamIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_StreamIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_StreamIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_StreamIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_StreamIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.StreamIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_StreamIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_StreamIterator: 0
}, false, "scala.collection.immutable.StreamIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_immutable_StreamIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_StreamIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_StreamIterator;
//@ sourceMappingURL=StreamIterator.js.map
