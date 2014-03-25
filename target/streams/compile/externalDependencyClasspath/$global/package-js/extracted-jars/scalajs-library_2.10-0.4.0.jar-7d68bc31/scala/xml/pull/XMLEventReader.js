/** @constructor */
ScalaJS.c.scala_xml_pull_XMLEventReader = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.preserveWS$2 = false;
  this.MaxQueueSize$2 = 0;
  this.EndOfStream$2 = null;
  this.parser$2 = null;
  this.parserThread$2 = null;
  this.POISON$module$2 = null;
  this.scala$xml$pull$ProducerConsumerIterator$$queue$2 = null;
  this.scala$xml$pull$ProducerConsumerIterator$$buffer$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.constructor = ScalaJS.c.scala_xml_pull_XMLEventReader;
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.POISON$lzycompute__p2__Lscala_xml_pull_XMLEventReader$POISON$ = (function() {
  if ((this.POISON$module$2 === null)) {
    this.POISON$module$2 = new ScalaJS.c.scala_xml_pull_XMLEventReader$POISON$().init___Lscala_xml_pull_XMLEventReader(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.POISON$module$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$queue$lzycompute__p2__Ljava_util_concurrent_LinkedBlockingQueue = (function() {
  if ((!this.bitmap$0$2)) {
    this.scala$xml$pull$ProducerConsumerIterator$$queue$2 = ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__scala$xml$pull$ProducerConsumerIterator$$queue__Lscala_xml_pull_ProducerConsumerIterator__Ljava_util_concurrent_LinkedBlockingQueue(this);
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$xml$pull$ProducerConsumerIterator$$queue$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$queue__Ljava_util_concurrent_LinkedBlockingQueue = (function() {
  if ((!this.bitmap$0$2)) {
    return this.scala$xml$pull$ProducerConsumerIterator$$queue$lzycompute__p2__Ljava_util_concurrent_LinkedBlockingQueue()
  } else {
    return this.scala$xml$pull$ProducerConsumerIterator$$queue$2
  }
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$undsetter$und$MaxQueueSize$und$eq__I__V = (function(x$1) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$buffer__O = (function() {
  return this.scala$xml$pull$ProducerConsumerIterator$$buffer$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$buffer$und$eq__O__V = (function(x$1) {
  this.scala$xml$pull$ProducerConsumerIterator$$buffer$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.interruptibly__Lscala_Function0__Lscala_Option = (function(body) {
  return ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__interruptibly__Lscala_xml_pull_ProducerConsumerIterator__Lscala_Function0__Lscala_Option(this, body)
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.produce__O__V = (function(x) {
  ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__produce__Lscala_xml_pull_ProducerConsumerIterator__O__V(this, x)
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.hasNext__Z = (function() {
  return ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__hasNext__Lscala_xml_pull_ProducerConsumerIterator__Z(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.next__O = (function() {
  return ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__next__Lscala_xml_pull_ProducerConsumerIterator__O(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.available__Z = (function() {
  return ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__available__Lscala_xml_pull_ProducerConsumerIterator__Z(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.preserveWS__Z = (function() {
  return this.preserveWS$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.MaxQueueSize__I = (function() {
  return this.MaxQueueSize$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.POISON__Lscala_xml_pull_XMLEventReader$POISON$ = (function() {
  if ((this.POISON$module$2 === null)) {
    return this.POISON$lzycompute__p2__Lscala_xml_pull_XMLEventReader$POISON$()
  } else {
    return this.POISON$module$2
  }
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.EndOfStream__Lscala_xml_pull_XMLEventReader$POISON$ = (function() {
  return this.EndOfStream$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.stop__V = (function() {
  this.produce__O__V(this.POISON__Lscala_xml_pull_XMLEventReader$POISON$());
  this.parserThread$2.interrupt__V()
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.EndOfStream__O = (function() {
  return this.EndOfStream__Lscala_xml_pull_XMLEventReader$POISON$()
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.init___Lscala_io_Source = (function(src) {
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__$init$__Lscala_xml_pull_ProducerConsumerIterator__V(this);
  this.preserveWS$2 = true;
  this.MaxQueueSize$2 = 1000;
  this.EndOfStream$2 = this.POISON__Lscala_xml_pull_XMLEventReader$POISON$();
  this.parser$2 = new ScalaJS.c.scala_xml_pull_XMLEventReader$Parser().init___Lscala_xml_pull_XMLEventReader__Lscala_io_Source(this, src);
  this.parserThread$2 = new ScalaJS.c.java_lang_Thread().init___Ljava_lang_Runnable__T(this.parser$2, "XMLEventReader");
  this.parserThread$2.start__V();
  return this
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.available__ = (function() {
  return ScalaJS.bZ(this.available__Z())
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.produce__O__ = (function(x) {
  return ScalaJS.bV(this.produce__O__V(x))
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.interruptibly__Lscala_Function0__ = (function(body) {
  return this.interruptibly__Lscala_Function0__Lscala_Option(body)
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$buffer$und$eq__O__ = (function(x$1) {
  return ScalaJS.bV(this.scala$xml$pull$ProducerConsumerIterator$$buffer$und$eq__O__V(x$1))
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$buffer__ = (function() {
  return this.scala$xml$pull$ProducerConsumerIterator$$buffer__O()
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$undsetter$und$MaxQueueSize$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.scala$xml$pull$ProducerConsumerIterator$$undsetter$und$MaxQueueSize$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.scala$xml$pull$ProducerConsumerIterator$$queue__ = (function() {
  return this.scala$xml$pull$ProducerConsumerIterator$$queue__Ljava_util_concurrent_LinkedBlockingQueue()
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.stop__ = (function() {
  return ScalaJS.bV(this.stop__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.EndOfStream__ = (function() {
  return this.EndOfStream__Lscala_xml_pull_XMLEventReader$POISON$()
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.POISON__ = (function() {
  return this.POISON__Lscala_xml_pull_XMLEventReader$POISON$()
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.MaxQueueSize__ = (function() {
  return ScalaJS.bI(this.MaxQueueSize__I())
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.preserveWS__ = (function() {
  return ScalaJS.bZ(this.preserveWS__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_XMLEventReader = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_XMLEventReader.prototype = ScalaJS.c.scala_xml_pull_XMLEventReader.prototype;
ScalaJS.is.scala_xml_pull_XMLEventReader = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_XMLEventReader)))
});
ScalaJS.as.scala_xml_pull_XMLEventReader = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_XMLEventReader(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.XMLEventReader")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_XMLEventReader = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_XMLEventReader)))
});
ScalaJS.asArrayOf.scala_xml_pull_XMLEventReader = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_XMLEventReader(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.XMLEventReader;", depth)
  }
});
ScalaJS.data.scala_xml_pull_XMLEventReader = new ScalaJS.ClassTypeData({
  scala_xml_pull_XMLEventReader: 0
}, false, "scala.xml.pull.XMLEventReader", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_xml_pull_XMLEventReader: 1,
  scala_xml_pull_ProducerConsumerIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_XMLEventReader.prototype.$classData = ScalaJS.data.scala_xml_pull_XMLEventReader;
//@ sourceMappingURL=XMLEventReader.js.map
